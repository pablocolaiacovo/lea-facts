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
const reload = require('./img/reload.png');
const lea = require('./img/lea/17311063_10212404785023868_4483444465958852795_o.jpg');

export default class LeaFacts extends Component {
  render() {
    return (
        <Image source={background} style={styles.background}>
          <View style={styles.title}>
            <Text style={styles.welcome}>
              #LeaFacts
            </Text>
          </View>
          <View style={styles.content}>
            <View style={{flexDirection: 'column', flex: .8}}>
              <View style={styles.leaContainer}>
                <Image source={lea} resizeMode="stretch"></Image>
              </View>
              <View style={styles.fact}>
                <Text style={{textAlign: 'center'}}>
                  * Lo que no muchos saben, es que no es sambayon, es sabayon por la region de Italia. Zabaione es en italiano
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'column', borderWidth:1, flex: .2, width: null, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={reload} style={{ width: 100, resizeMode: 'contain'}}></Image>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={{flex: .5, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{textAlign: 'center'}}>SHARE FACEBOOK</Text>
            </View>
            <View style={{flex: .5, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{textAlign: 'center'}}>SHARE FACEBOOK</Text>
            </View>
          </View>
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
    backgroundColor: 'white',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  content: {
    flex: .8
  },
  leaContainer: {
    flex: .6,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center'
  },
  fact: {
    flex: .4,
    borderWidth:1,
    flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center'
  },
  footer: {
    flex: .1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    color: 'black'
  }
});

AppRegistry.registerComponent('LeaFacts', () => LeaFacts);
