import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import Layout from './components/Layout/Layout'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
        
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Layout>
  );
}
export default App
