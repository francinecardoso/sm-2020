import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.childs, styles.child1]}></View>
      <View style={[styles.childs, styles.child2]}></View>
      <View style={[styles.childs, styles.child3]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  text: {
    color: '#faf',
  },
  childs: {
    width: 50, 
    height: 50
  },
  child1: {
    backgroundColor: 'powderblue',

  },
  child2: {
    backgroundColor: 'skyblue',
  },
  child3: {
    backgroundColor: 'steelblue',
  }
    

});