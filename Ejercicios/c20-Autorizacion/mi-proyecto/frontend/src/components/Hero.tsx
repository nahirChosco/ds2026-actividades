
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Hero() {
  return (
    <Box className="hero">
      <Typography variant="h2" className="texto" sx={{ fontWeight: 'bold' }}>
        Bienvenido a nuestra Librería
      </Typography>
      <Typography variant="h6" className="hero-texto">
        Descubrí las mejores historias en nuestro catálogo de libros.
      </Typography>
      
      <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }} component={Link} to="/catalogo">
        Ir al catalogo
      </Button>
    </Box>
  );
}