import { Routes, Route, Link } from 'react-router-dom';
import Paginauno from './Paginauno';
import Paginados from './Paginados';
import './Estructura.css';

function Pagina() {
  return (
    <div className="principal">

      <div className="cabecera">
        <h1>EXAMEN FINAL DE ESTHER DANIELA CRUZ CANAZA</h1>
      </div>

      <div className="menu">
        <h3>MENU</h3>

        <p>
          <Link to="/">BIENVENIDA</Link>
        </p>

        <p>
          <Link to="/perfil">PERFIL</Link>
        </p>
      </div>

      <div className="contenido">
        <Routes>
          <Route path="/" element={<Paginauno />} />
          <Route path="/perfil" element={<Paginados />} />
        </Routes>
      </div>

      <div className="publicidad">
        <h3>PUBLICIDAD</h3>

        <img
          src="/avatars.avif"
          alt="Avatar"
          width="150"
        />
      </div>

      <div className="pie">
        <h3>Diseñado por: Esther Daniela Cruz Canaza, 2026</h3>
      </div>

    </div>
  );
}

export default Pagina;