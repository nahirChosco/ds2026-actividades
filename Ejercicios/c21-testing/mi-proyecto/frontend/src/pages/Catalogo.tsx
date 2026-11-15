import { Container, Typography, Grid, CircularProgress, Alert } from '@mui/material';
import { useFetch } from '../hooks/useFetch';
import LibroCard from '../components/LibroCard'; 
import type { Libro } from '../types/libro'; // <-- Importamos el tipo real

export default function Catalogo() {
  const { data: libros, loading, error } = useFetch<Libro[]>('/libros');

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', py: 10 }}>
        <CircularProgress size={60} />
        <Typography variant="h6" sx={{ mt: 3, color: 'text.secondary' }}>
          Cargando catálogo...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 10 }}>
        <Alert severity="error" variant="filled">
          Ocurrió un error: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Catálogo de Libros
      </Typography>

      <Grid container spacing={4}>
        {libros?.map((libro) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={libro.id}>
            <LibroCard 
              id={libro.id}
              titulo={libro.titulo}
              autor={libro.autor} // <-- Pasamos el objeto Autor completo
              descripcion={libro.descripcion || 'Sin descripción disponible.'}
              imagen={libro.imagen || 'https://placehold.co/300x400?text=Sin+Portada'}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}