import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import {map, filter} from 'lodash';

import Todo from './Todo';
import FilterBar from './FilterBar';
import Header from './Header/Header';

import {addTodo, updateTodo} from '../actions/todo-actions';

class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      newTodo: '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
  }
  handleTextChange(text) {
    this.setState({newTodo: text});
  }
  submitTodo() {
    const {newTodo} = this.state;
    const {dispatch} = this.props;
    let todo = {};
    if (newTodo) {
      this.setState({newTodo: ''});
      todo = {
        name: newTodo,
        completed: false,
      };
      dispatch(addTodo(todo));
    }
    return;
  }
  updateTodoStatus(id) {
    const {dispatch} = this.props;
    dispatch(updateTodo(id));
  }
  renderTodos() {
    const {todos, display} = this.props;
    let todoList = [];
    switch (display) {
      case 'All':
        todoList = map(todos, (todo, idx) => <Todo updateStatus={this.updateTodoStatus} key={idx} todo={todo} />);
        break;
      case 'Active':
        const activeTodos = filter(todos, todo => !todo.completed);
        todoList = map(activeTodos, (todo, idx) => <Todo updateStatus={this.updateTodoStatus} key={idx} todo={todo} />);
        break;
      case 'Completed':
        const completedTodos = filter(todos, todo => todo.completed);
        todoList = map(completedTodos, (todo, idx) => (
          <Todo updateStatus={this.updateTodoStatus} key={idx} todo={todo} />
        ));
        break;
      default:
        todoList = map(todos, (todo, idx) => <Todo updateStatus={this.updateTodoStatus} key={idx} todo={todo} />);
        break;
    }
    return todoList;
  }
  render() {
    const {newTodo} = this.state;
    const {dispatch} = this.props;
    console.log('Props: ', this.props);
    return (
      <View style={styles.container}>
        <Header />
        <FilterBar dispatch={dispatch} />
        <TextInput style={styles.textInput} value={newTodo} onChangeText={this.handleTextChange} />
        <TouchableOpacity style={styles.createContainer} onPress={this.submitTodo}>
          <Text style={styles.createBtn}>Create</Text>
        </TouchableOpacity>
        {this.renderTodos()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  createContainer: {
    height: 35,
    alignSelf: 'stretch',
    backgroundColor: '#f1bf57',
  },
  createBtn: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  textInput: {
    height: 50,
    alignSelf: 'stretch',
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default connect(state => ({
  todos: state.todos.todos,
  display: state.todos.display,
}))(TodoApp);
