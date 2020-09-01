import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import de páginas
import { Home } from './../pages/Home'
import { About } from './../pages/About'
import { Profile } from './../pages/Profile'

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="4137">
                <Stack.Screen  name="4137" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
      );
}
