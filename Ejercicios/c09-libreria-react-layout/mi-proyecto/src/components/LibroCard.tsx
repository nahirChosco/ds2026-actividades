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
import type { LibroCardProps } from '../types/libro';
export default function LibroCard({titulo, autor, portada}:LibroCardProps) {
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
