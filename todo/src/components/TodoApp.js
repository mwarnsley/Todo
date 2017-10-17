import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import {map} from 'lodash';

import Todo from './Todo';

class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      newTodo: '',
      todos: [],
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  handleTextChange(text) {
    this.setState({newTodo: text});
  }
  addTodo() {
    const {newTodo} = this.state;
    if (newTodo) {
      this.setState({
        newTodo: '',
        todos: [...this.state.todos, newTodo],
      });
    }
    return;
  }
  renderTodos() {
    const {todos} = this.state;
    const todoList = map(todos, (todo, idx) => <Todo key={idx} todo={todo} />);
    return todoList;
  }
  render() {
    const {newTodo} = this.state;
    const {todos} = this.props;
    console.log('TODOS: ', todos);
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} value={newTodo} onChangeText={this.handleTextChange} />
        <TouchableOpacity style={styles.createContainer} onPress={this.addTodo}>
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
    backgroundColor: '#F5FCFF',
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
