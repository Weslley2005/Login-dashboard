import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => (
  <Card>
    <CardContent>
      <Typography variant="h4" gutterBottom>
        Bem-vindo à Tela Principal!
      </Typography>
      <Typography>
        Use o menu lateral para navegar.
      </Typography>
    </CardContent>
  </Card>
);

export default Dashboard;
