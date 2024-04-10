import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './appStack';
import {AuthStack} from './authStack';
import {useAuth} from '../contexts/auth/auth';

export function Router() {
  const {authData, isLoading} = useAuth();

  if (isLoading) {
    console.log({isLoading});
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Carregando informações....</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
