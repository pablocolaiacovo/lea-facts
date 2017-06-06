/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const background = require('./img/background/dark_embroidery.png');

export default class LeaFacts extends Component {
  render() {
    return (
        <Image source={background} style={styles.background}>
          <View style={styles.title}>
            <Text style={styles.welcome}>
              #LeaFacts
            </Text>
          </View>
          <View style={styles.content}></View>
          <View style={styles.footer}></View>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  background: {
    width: null,
    height: null,
    resizeMode: 'repeat',
    flex: 1
  },
  title: {
    flex: .1,
    backgroundColor: 'white'
  },
  content: {
    flex: .8
  },
  footer: {
    flex: .1,
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    paddingTop: 10,
    color: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LeaFacts', () => LeaFacts);
