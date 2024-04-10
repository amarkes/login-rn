import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../pages/home/index';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
