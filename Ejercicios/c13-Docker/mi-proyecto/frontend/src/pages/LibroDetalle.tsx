import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid, CircularProgress, Alert } from '@mui/material';
import '../App.css';
import { useFetch } from '../hooks/useFetch'; // 1. Importamos tu custom hook

export default function LibroDetalle() {
  const { id } = useParams();
  const { data, loading, error } = useFetch<any>('https://openlibrary.org/search.json?q=ciencia+ficcion&limit=12');

  if (loading) {
    return (
      <Container className="detalle-container" sx={{ textAlign: 'center', py: 10 }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>Cargando detalle del libro...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="detalle-container" sx={{ py: 10 }}>
        <Alert severity="error">Ocurrió un error: {error}</Alert>
      </Container>
    );
  }
  const librosEncontrados = data?.docs || [];
  const libroEncontrado = librosEncontrados.find((libro: any) => 
    libro.key === id || libro.key.includes(id)
  );

  if (!libroEncontrado) {
    return (
      <Container className="detalle-container" sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h4">Libro no encontrado</Typography>
        <Button component={Link} to="/catalogo" sx={{ mt: 3 }} variant="outlined">
          Volver al catálogo
        </Button>
      </Container>
    );
  }
  const imagenUrl = libroEncontrado.cover_i 
    ? `https://covers.openlibrary.org/b/id/${libroEncontrado.cover_i}-L.jpg`
    : 'https://placehold.co/300x400?text=Sin+Portada';
  
  const autorAdaptado = libroEncontrado.author_name ? libroEncontrado.author_name.join(', ') : 'Autor desconocido';
  const descripcionAdaptada = libroEncontrado.first_sentence ? libroEncontrado.first_sentence[0] : 'Este libro no cuenta con una descripción en la base de datos de OpenLibrary.';

  return (
    <Container className="detalle-container" sx={{ py: 5 }}>
      <Button component={Link} to="/catalogo" className="btn-volver" sx={{ mb: 4 }}>
        ← Volver al catálogo
      </Button>

      <Grid container spacing={6} className="detalle-grid">
        <Grid size={{ xs: 12, md: 5 }}>
          <Box 
            component="img"
            src={imagenUrl}
            alt={libroEncontrado.title}
            className="detalle-imagen"
            sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }} className="detalle-info">
          <Typography variant="h3" component="h1" className="detalle-titulo" gutterBottom>
            {libroEncontrado.title}
          </Typography>
          
          <Typography variant="h5" color="text.secondary" className="detalle-autor" gutterBottom>
            por {autorAdaptado}
          </Typography>
          
          <Typography variant="body1" component="p" className="detalle-descripcion" sx={{ mt: 3, mb: 4 }}>
            {descripcionAdaptada}
          </Typography>
          
          <Typography variant="overline" component="div" className="detalle-id" sx={{ mb: 2, color: 'text.disabled' }}>
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