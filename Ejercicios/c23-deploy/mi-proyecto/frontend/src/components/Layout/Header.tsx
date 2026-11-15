import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useAuth } from '../../context/AuthContext';
import '../../App.css';

export default function Header() {
  const { usuario, logout, tieneRol } = useAuth();
  const navigate = useNavigate();

  const manejarSesion = () => {
    if (usuario) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

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

          {tieneRol('ADMIN') && (
            <Button className="btn-enlace" component={Link} to="/libros/nuevo">Nuevo libro</Button>
          )}

          <Button className="btn-enlace">Contacto</Button>

          {usuario && (
            <Typography component="span" sx={{ ml: 2, color: 'text.primary' }}>
              Hola, {usuario.nombre}
            </Typography>
          )}

          <Button className="btn-enlace" onClick={manejarSesion}>
            {usuario ? 'Salir' : 'Ingresar'}
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}