// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Admin from '../Screens/Admin';
import Details from '../Screens/Details';
import Further from '../Screens/Further';
import TabRoute from './TabRoute'
import Thanks from '../Screens/Thanks';
import Info from '../Screens/Info';
const Stack = createNativeStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" options={{headerShown:false}}  component={SplashScreen} />
        <Stack.Screen name="TabRoute" options={{headerShown:false}}  component={TabRoute} />
        <Stack.Screen name="Info" options={{headerShown:false}}  component={Info} />
        <Stack.Screen name="Thanks" options={{headerShown:false}}  component={Thanks} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="Further" options={{headerShown:false}} component={Further} />
        <Stack.Screen name="Details" options={{headerShown:false}} component={Details} />
        <Stack.Screen name="Signup" options={{headerShown:false}}  component={Signup} />
        <Stack.Screen name="Admin" options={{headerShown:false}} component={Admin} />
        <Stack.Screen name="Login" options={{headerShown:false}}  component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;