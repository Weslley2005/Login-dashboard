const authProvider = {
    login: ({ username, password }) => {
      if (username === 'teste' && password === 'teste') {
        localStorage.setItem('auth', JSON.stringify({ username }));
        return Promise.resolve();
      }
      return Promise.reject(new Error('Usuário ou senha incorretos.'));
    },
    logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
    },
    checkAuth: () =>
      localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.resolve(),
  };
  
  export default authProvider;
  