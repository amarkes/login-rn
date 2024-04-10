import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen} from '../pages/singIn/index';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}
