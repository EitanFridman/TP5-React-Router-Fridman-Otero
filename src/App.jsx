import { useState, useEffect} from 'react';
import { Routes, Route, Navigate  } from 'react-router';
// import Formulario from './Formulario';
// import ListadoCitas from './ListadoCitas';
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
    // <>
    //   <h1>ADMINISTRADOR DE PACIENTES</h1>
    //   <div className="container">
    //     <div className="row">
    //       <div className="one-half column">
    //         <h2>Crear mi Cita</h2>
    //         <Formulario onAgregarCita={agregarCita} />
    //       </div>
    //       <div className="one-half column">
    //         <ListadoCitas citas={citas} onEliminarCita={eliminarCita} />
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <Navbar />
      <main>
        <Routes>  
          <Route path="/" element={<Navigate to="/home" />} /> {/* ✅ Redirección */}
          <Route path="/home" element={<Home />} />
          <Route path="/crear" element={<CrearCita onAgregarCita={agregarCita} />} />
          <Route path="/ver" element={<VerCitas citas={citas} onEliminarCita={eliminarCita} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;