import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import MovieOverviewScreen from '../screens/MovieOverviewScreen';

export default function Navigation(props: any) {
  const Stack = createStackNavigator();
  const route = props.routeName;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="MovieOverviewScreen"
          component={MovieOverviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
