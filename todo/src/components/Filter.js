import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class Filter extends Component {
  render() {
    const {filterTodos} = this.props;
    return (
      <View style={styles.filterListContainer}>
        <Text style={styles.filterText}>Filter: </Text>
        <TouchableOpacity onPress={() => filterTodos('All')}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterTodos('Active')}>
          <Text style={styles.filterText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterTodos('Completed')}>
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterListContainer: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 20,
  },
  filterText: {
    color: '#808080',
    fontSize: 16,
    marginRight: 20,
  },
});

export default Filter;
