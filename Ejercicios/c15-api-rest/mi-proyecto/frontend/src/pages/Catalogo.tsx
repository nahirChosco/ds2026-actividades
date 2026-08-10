import { Container, Typography, Grid, CircularProgress, Alert } from '@mui/material';
import { useFetch } from '../hooks/useFetch';
import LibroCard from '../components/LibroCard'; 

export default function Catalogo() {
  const { data, loading, error } = useFetch<any>('https://openlibrary.org/search.json?q=ciencia+ficcion&limit=12');

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', py: 10 }}>
        <CircularProgress size={60} />
        <Typography variant="h6" sx={{ mt: 3, color: 'text.secondary' }}>
          Buscando libros...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 10 }}>
        <Alert severity="error" variant="filled">
          Ocurrió un error de conexión: {error}
        </Alert>
      </Container>
    );
  }

  const librosEncontrados = data?.docs || [];

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Catálogo de Libros
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        catalogo de nuestra coleccion de Ciencia Ficcion
      </Typography>

      <Grid container spacing={4}>
        {librosEncontrados.map((libro: any) => {
          const imagenUrl = libro.cover_i 
            ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
            : 'https://placehold.co/300x400?text=Sin+Portada';
          
          const autorAdaptado = libro.author_name ? libro.author_name.join(', ') : 'Autor desconocido';

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={libro.key}>
              <LibroCard 
                id={libro.key}
                titulo={libro.title}
                autor={autorAdaptado}
                descripcion={libro.first_sentence ? libro.first_sentence[0] : 'Sin descripción disponible.'}
                imagen={imagenUrl}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}