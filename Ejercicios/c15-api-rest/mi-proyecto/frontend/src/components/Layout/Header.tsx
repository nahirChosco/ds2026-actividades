import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../../App.css'
export default function Header() {
  return (
    <AppBar position="static" className="navbar-fondo">
      <Toolbar>
        
        <MenuBookIcon className="navbar-icono" />
        
        <Typography variant="h6" component="div" className="navbar-titulo">
          Librería
        </Typography>

        <Box className="navbar-enlaces">
          <Button className="btn-enlace" component={Link} to="/">Inicio</Button>
          <Button className="btn-enlace" component={Link} to="/catalogo">Catálogo</Button>
          <Button className="btn-enlace" component={Link} to="/libros/nuevo" >Agregar Libro</Button>
          <Button className="btn-enlace">Contacto</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}