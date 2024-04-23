import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {useAuth} from '../../contexts/auth/auth';

export function HomeScreen() {
  const {signOut} = useAuth();
  return (
    <View>
      <Text>Welcome home</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}
