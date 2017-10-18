import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Filter from './Filter';
import {filterTodoList} from '../actions/todo-actions';

class FilterBar extends Component {
  constructor() {
    super();

    this.filterTodos = this.filterTodos.bind(this);
  }
  filterTodos(display) {
    const {dispatch} = this.props;
    dispatch(filterTodoList(display));
  }
  render() {
    return (
      <View style={styles.filterContainer}>
        <Filter filterTodos={this.filterTodos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: '#f1bf57',
  },
});

export default FilterBar;
