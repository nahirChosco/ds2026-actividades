import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import Layout from './components/Layout/Layout'
import LibroNuevo from './pages/LibroNuevo';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
        <Route path= "/libros/nuevo" element={<LibroNuevo />}/>
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Layout>
  );
}
export default App
