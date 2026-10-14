import { Alert, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function SinPermiso() {
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Alert severity="warning" sx={{ mb: 2 }}>
        No tenés permiso para acceder a esta página.
      </Alert>
      <Button component={RouterLink} to="/catalogo" variant="contained">
        Volver al catálogo
      </Button>
    </Container>
  );
}