import Cita from './Cita';
import './ListadoCitas.css';

const ListadoCitas = ({ citas, onEliminarCita }) => {
  return (
    <div className="lista-citas">
      {citas.map(cita => (
        <Cita
          key={cita.id}
          cita={cita}
          onEliminarCita={onEliminarCita}
        />
      ))}
    </div>
  );
};

export default ListadoCitas;