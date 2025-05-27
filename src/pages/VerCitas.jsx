import ListadoCitas from '../ListadoCitas';

const VerCitas = ({ citas, onEliminarCita }) => {
  return (
    <div className="container">
      <h2>Listado de Citas</h2>
      <ListadoCitas citas={citas} onEliminarCita={onEliminarCita} />
    </div>
  );
};

export default VerCitas;
