import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';

class Header extends Component {
  render() {
    return (
      <View>
        <ImageBackground style={styles.image} source={require('../../surf.jpg')}>
          <TouchableOpacity>
            <FontAwesome style={styles.addIcon}>{Icons.plusCircle}</FontAwesome>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addIcon: {
    color: 'white',
    fontSize: 40,
    marginRight: 20,
  },
  image: {
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 100,
  },
});

export default Header;
