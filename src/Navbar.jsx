import { Link  } from 'react-router';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/crear">Crear Cita</Link>
        </li>
        <li>
          <Link to="/ver">Ver Citas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;