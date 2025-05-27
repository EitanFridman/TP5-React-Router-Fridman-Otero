import Formulario from '../Formulario';

const CrearCita = ({ onAgregarCita }) => {
  return (
    <div className="container">
      <h2>Crear mi Cita</h2>
      <Formulario onAgregarCita={onAgregarCita} />
    </div>
  );
};

export default CrearCita;
