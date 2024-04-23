import * as React from 'react';
import {Button, TextInput, View} from 'react-native';
import {useAuth} from '../../contexts/auth/auth';

export function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {signIn} = useAuth();
  // const {signIn} = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign in" onPress={() => signIn(username, password)} />
    </View>
  );
}
