import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Container } from '@mui/material';
import Box from '@mui/material/Box';
import LibroCard from '../components/LibroCard'
import '../App.css'

const libros = [
{
  id:1 , autor:"Harlan Ellison", imagen:"https://covers.openlibrary.org/b/id/8571799-L.jpg", titulo:"No tengo boca y debo gritar" 
},
{
  id:2 , autor:"Frank Herber", imagen:"https://covers.openlibrary.org/b/id/14636513-L.jpg", titulo:"Dune"
},
{
  id:3 , autor:"Ursula K. Le Guin", imagen:"https://covers.openlibrary.org/b/id/13955546-L.jpg", titulo:"La mano izquierda de la oscuridad"
},
{
  id:4 , autor:"Ray Bradbury" , imagen:"https://covers.openlibrary.org/b/id/10720584-L.jpg", titulo:"Fahrenheit 451"
},
{
  id:5, autor:"Isaac Asimov", imagen:"https://covers.openlibrary.org/b/id/14560069-L.jpg", titulo:"Fundacion"
},
{
  id:6, autor:"Cixin Liu", imagen:"https://covers.openlibrary.org/b/id/7451691-L.jpg", titulo:"El problema de los 3 cuerpos"
}
];


function Hero() {
  return (
    <Box className="hero">
      <Typography variant="h2" className="texto" sx={{ fontWeight: 'bold' }}>
        Bienvenido a nuestra Librería
      </Typography>
      <Typography variant="h6" className="hero-texto">
        Descubrí las mejores historias en nuestro catálogo de libros.
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
        Ir al catalogo
      </Button>

    </Box>
  );
}

export default function Home() {

  return (
    <>
    < Hero />
    <Container sx={{marginY:5}}>
      <Grid container spacing={4}>
        {libros.map((libro) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={libro.id}>
            <LibroCard titulo={libro.titulo} autor={libro.autor} portada={libro.imagen} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
  );
}