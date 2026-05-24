import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import './App.css';
function Navbar() {
  return (
    <AppBar position="static" className="navbar-fondo">
      <Toolbar>
        
        <MenuBookIcon className="navbar-icono" />
        
        <Typography variant="h6" component="div" className="navbar-titulo">
          Librería
        </Typography>

        <Box className="navbar-enlaces">
          <Button className="btn-enlace">Inicio</Button>
          <Button className="btn-enlace">Catálogo</Button>
          <Button className="btn-enlace">Contacto</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}
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

type LibroCardProps ={
  titulo: string;
  autor: string;
  portada: string;
}
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


function LibroCard({titulo, autor, portada}:LibroCardProps) {
  const [likes, setLikes] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={portada}
        title={autor}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {autor}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ver mas</Button>
        <IconButton 
          onClick={() => setLikes(!likes)} 
          color="error" 
          aria-label="me gusta"
        >
          {likes? <FavoriteIcon/> :<FavoriteBorderIcon/>}
        </IconButton>
        
        {/* Mostramos el contador actualizado */}
        <Typography variant="body2" color="text.secondary">
          {likes? 1 : 0}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default function App() {

  return (
    <>
    < Navbar />
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