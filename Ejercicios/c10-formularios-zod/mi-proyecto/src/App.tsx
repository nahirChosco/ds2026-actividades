import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import Layout from './components/Layout/Layout'
import LibroNuevo from './pages/LibroNuevo';
import {libros as librosIniciales} from './data/libros';
import { useState } from 'react';
function App() {
  const [listaLibros, setListaLibros] = useState(librosIniciales);
  const agregarLibro = (nuevoLibro:any) => {
    setListaLibros([...listaLibros, nuevoLibro]);
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo libros={listaLibros} />} />
        
        <Route path="/libros/:id" element={<LibroDetalle libros={listaLibros}/>} />
        <Route path= "/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro}/>}/>
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Layout>
  );
}
export default App
