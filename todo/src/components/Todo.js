import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';

class Todo extends Component {
  render() {
    const {todo, updateStatus} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => updateStatus(todo.id)}>
          <FontAwesome style={todo.completed ? styles.iconBtnCompleted : styles.iconBtnNotCompleted}>
            {todo.completed ? Icons.check : Icons.times}
          </FontAwesome>
        </TouchableOpacity>
        <Text style={todo.completed ? styles.todoTextCompleted : styles.todoText}>{todo.name}</Text>
        {todo.completed ? <Text style={styles.dateCompleted}>Date Completed: {todo.completionDate}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 20,
  },
  todoText: {
    color: '#808080',
    fontSize: 20,
  },
  todoTextCompleted: {
    color: '#808080',
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
  iconBtnCompleted: {
    color: 'green',
    fontSize: 24,
    marginRight: 20,
  },
  iconBtnNotCompleted: {
    color: 'red',
    fontSize: 24,
    marginRight: 20,
  },
  dateCompleted: {
    color: '#d3d3d3',
    fontSize: 12,
    marginLeft: 'auto',
    paddingTop: 5,
  },
});

export default Todo;
