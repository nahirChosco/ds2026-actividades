import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { libros } from '../data/libros'; // Importamos la lista
import '../App.css';

export default function LibroDetalle() {
  const { id } = useParams();

  const libroEncontrado = libros.find((libro) => libro.id === Number(id));

  if (!libroEncontrado) {
    return (
      <Container className="detalle-container" sx={{ textAlign: 'center' }}>
        <Typography variant="h4">Libro no encontrado</Typography>
        <Button component={Link} to="/catalogo" sx={{ mt: 3 }}>Volver al catálogo</Button>
      </Container>
    );
  }

  return (
    <Container className="detalle-container">
      <Button component={Link} to="/catalogo" className="btn-volver">
        ← Volver al catálogo
      </Button>

      <Grid container spacing={6} className="detalle-grid">
        <Grid size={{ xs: 12, md: 5 }}>
          <Box 
            component="img"
            src={libroEncontrado.imagen}
            alt={libroEncontrado.titulo}
            className="detalle-imagen"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }} className="detalle-info">
          <Typography variant="h3" component="h1" className="detalle-titulo">
            {libroEncontrado.titulo}
          </Typography>
          
          <Typography variant="h5" className="detalle-autor">
            por {libroEncontrado.autor}
          </Typography>
          
          <Typography variant="body1" component="p" className="detalle-descripcion">
            {libroEncontrado.descripcion}
          </Typography>
          
          <Typography variant="overline" component="div" className="detalle-id">
            (Libro seleccionado - ID: {id})
          </Typography>
          
          <Button variant="contained" color="primary" size="large" className="btn-comprar">
            Agregar al carrito
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}