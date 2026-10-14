import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Alert, Box } from '@mui/material';
import { loginSchema, type LoginFormData } from '../schemas/loginSchema';
import {useAuth} from '../context/AuthContext';


export default function Login() {
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const navigate = useNavigate();
  const {login} = useAuth();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (datos: LoginFormData) => {
    setErrorApi(null);
    try {
      await login(datos);
      navigate('/catalogo');
    } catch (err) {
      if (err instanceof Error) {
        setErrorApi(err.message);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom align="center">Iniciar Sesión</Typography>
      
      {errorApi && <Alert severity="error" sx={{ mb: 2 }}>{errorApi}</Alert>}
      
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          margin="normal"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button 
          type="submit" 
          fullWidth 
          variant="contained" 
          sx={{ mt: 3 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Ingresando...' : 'Ingresar'}
        </Button>
      </Box>
    </Container>
  );
}