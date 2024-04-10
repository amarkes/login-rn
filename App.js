import React from 'react';
import {AuthProvider} from './src/contexts/auth/auth';
import {Router} from './src/routes/routes';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
