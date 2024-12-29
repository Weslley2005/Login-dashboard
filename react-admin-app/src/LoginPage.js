import React, { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { TextField, Button, Box, Typography } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      await login({ username, password });
    } catch (error) {
      setError('Usuário ou senha incorretos.');
      notify('Falha no login', { type: 'error' });
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <Typography variant="h4" mb={2}>
        Login
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Entrar
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
