import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AndroidIcon from 'react-native-vector-icons/AntDesign';

Icon.loadFont()
AndroidIcon.loadFont()

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.views, styles.child1]}>
        <Icon name="check-circle" size={30} color="#fff"></Icon>
      </View>
      <View style={[styles.views, styles.child2]}>
        <AndroidIcon name="plus" size={30} color="#fff"></AndroidIcon>
      </View>
      <View style={[styles.views, styles.child3]}>
        <Icon name="android" size={30} color="#fff"></Icon>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  views: {
    width: 100,
    height: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  child1: {
    backgroundColor: 'powderblue',
    shadowColor: '#DADADA',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 1,
  },
  child2: {
    backgroundColor: 'skyblue',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  child3: {
    backgroundColor: 'steelblue',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
  },


});
