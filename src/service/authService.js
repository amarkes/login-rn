const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123456') {
        resolve({
          token: JWTTokenMock,
          email: email,
          name: 'Lucas Garcez',
        });
      } else {
        reject(new Error('credenciais incorretas'));
      }
    }, 1000);
  });
};

export const authService = {
  signIn,
};

const JWTTokenMock = 'token here';
