import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import {map} from 'lodash';

import Todo from './Todo';

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
    const {todos} = this.props;
    const todoList = map(todos, (todo, idx) => <Todo updateStatus={this.updateTodoStatus} key={idx} todo={todo} />);
    return todoList;
  }
  render() {
    const {newTodo} = this.state;
    return (
      <View style={styles.container}>
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
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  createBtn: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
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
}))(TodoApp);
