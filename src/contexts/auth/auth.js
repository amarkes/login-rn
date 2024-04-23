import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from '../../service/authService';
import {Alert} from 'react-native';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [authData, setAuthData] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  }

  async function signIn(email, password) {
    try {
      console.log(email, password)
      const authData = await authService.signIn(email, password);

      setAuthData(authData);
      AsyncStorage.setItem('@AuthData', JSON.stringify(authData));
    } catch (error) {
      Alert.alert(error.message, 'Tente novamente');
    }
  }
  async function signOut() {
    setAuthData(undefined);
    AsyncStorage.removeItem('@AuthData');
  }

  return (
    <AuthContext.Provider value={{authData, signIn, signOut, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
