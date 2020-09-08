import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Camera"
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
  );
}

