import {obtenerUsuarios} from './api.js' ;
 const usuarios = await obtenerUsuarios();
 usuarios.forEach(usuario => {
    console.log(`usuario: ${usuario.name} email: ${usuario.email}`);
 });