import React from 'react';
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import de páginas
import { Home } from './../pages/Home'
import { About } from './../pages/About'
import { Profile } from './../pages/Profile'
import { OpenCamera } from '../pages/OpenCamera'

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="4137"  headerMode="none" >
                <Stack.Screen  
                    name="4137" 
                    component={Home}                
                />
                <Stack.Screen 
                    name="About" 
                    component={About} 
                />
                <Stack.Screen 
                    name="Profile" 
                    component={Profile} 
                />
                <Stack.Screen
                    name="Camera"
                    component={OpenCamera}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}