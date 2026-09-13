import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { libroSchema } from '../schemas/libroSchema';

export default function LibroNuevo() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    descripcion: '',
    imagen: '',
  });
  const [errores, setErrores] = useState<Record<string, string>>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errores[name]) {
      setErrores({ ...errores, [name]: '' });
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault(); 
      const resultado = libroSchema.safeParse(form);
    
    if (!resultado.success) {
      const err: Record<string, string> = {};  
      for (const issue of resultado.error.issues) {
        const campo = String(issue.path[0]); 
        if (!err[campo]) {
          err[campo] = issue.message; 
        }
      }
      setErrores(err);
      return; 
    }
    
    const nuevoLibro = {
      id: Date.now(),
      titulo: resultado.data.titulo,
      autor: resultado.data.autor,
      descripcion: resultado.data.descripcion,
      imagen: resultado.data.imagen?.trim() ? resultado.data.imagen : 'https://placehold.co/300x400?text=Sin+Imagen'
    };

    console.log("Datos validados listos", nuevoLibro);
    alert("¡Libro validado con éxito! ");

    navigate('/catalogo');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
        Agregar Nuevo Libro
      </Typography>
      
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}
      >
        <TextField 
          label="Título"
          name="titulo"
          variant="outlined"
          value={form.titulo}
          onChange={handleChange}
          error={!!errores.titulo}
          helperText={errores.titulo}
          fullWidth
        />

        <TextField 
          label="Autor"
          name="autor"
          variant="outlined"
          value={form.autor}
          onChange={handleChange}
          error={!!errores.autor}
          helperText={errores.autor}
          fullWidth
        />

        <TextField 
          label="Descripción"
          name="descripcion"
          variant="outlined"
          value={form.descripcion}
          onChange={handleChange}
          multiline
          rows={4}
          error={!!errores.descripcion}
          helperText={errores.descripcion}
          fullWidth
        />

        <TextField 
          label="URL de la Portada (opcional)"
          name="imagen"
          variant="outlined"
          value={form.imagen}
          onChange={handleChange}
          fullWidth
        />

        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          size="large"
          sx={{ mt: 2 }}
        >
          Guardar Libro
        </Button>
      </Box>
    </Container>
  );
}