import { Grid, Container, Typography } from '@mui/material';
import LibroCard from '../components/LibroCard';
import {libros} from '../data/libros';


export default function Catalogo() {
  return (
    <Container sx={{ marginY: 5 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>Catálogo</Typography>
      <Grid container spacing={4}>
        {libros.map((libro) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={libro.id}>
            <LibroCard id={libro.id} titulo={libro.titulo} autor={libro.autor} portada={libro.imagen} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}