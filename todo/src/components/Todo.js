import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Todo extends Component {
  render() {
    const {todo} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.todoText}>{todo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderBottomColor: '#d3d3d3',
    padding: 10,
  },
  todoText: {
    color: '#d3d3d3',
  },
});

export default Todo;
