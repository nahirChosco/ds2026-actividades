import { obtenerUsuarios } from './api.js';
const listado = document.getElementById('lista');
const mensaje = document.getElementById('mensaje');
mensaje.textContent = "cargando...";
try {
    const usuarios = await obtenerUsuarios();
    mensaje.textContent = "";
    usuarios.forEach(usuario => {
        const item = document.createElement('li');
        item.textContent = `usuario: ${usuario.name} email: ${usuario.email}`;
        listado.appendChild(item);
    });
}
catch (error) {
    mensaje.textContent = "Error al obtener los usuarios";
    mensaje.classList.add("texto-error");
}
