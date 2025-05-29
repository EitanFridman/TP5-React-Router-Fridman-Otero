import { useState, useEffect} from 'react';
import { Routes, Route, Navigate  } from 'react-router';
import CrearCita from './pages/CrearCita';
import VerCitas from './pages/VerCitas';
import Home from './pages/Home';
import Navbar from './Navbar';
import './App.css';

function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas');
    return citasGuardadas ? JSON.parse(citasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, {...nuevaCita, id: Date.now()}]);
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
  };

  return (
    <>
      <Navbar />
      <main>
        <Routes>  
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/crear" element={<CrearCita onAgregarCita={agregarCita} />} />
          <Route path="/ver" element={<VerCitas citas={citas} onEliminarCita={eliminarCita} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
