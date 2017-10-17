import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';

class Todo extends Component {
  render() {
    const {todo, updateStatus} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => updateStatus(todo.id)}>
          <FontAwesome>{todo.completed ? Icons.check : Icons.times}</FontAwesome>
        </TouchableOpacity>
        <Text style={todo.completed ? styles.todoTextCompleted : styles.todoText}>{todo.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    padding: 20,
  },
  todoText: {
    color: '#808080',
    fontSize: 16,
  },
  todoTextCompleted: {
    color: '#808080',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
});

export default Todo;
