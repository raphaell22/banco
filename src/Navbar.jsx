import { Link } from "react-router-dom";
import logo from "./icons/banco_logo.png";
import mouse from "./icons/mouse.png";
import personas from "./icons/personas.png";
import empresas from "./icons/empresas.png";
import lonuevo from "./icons/lonuevo.png";
import atencion from "./icons/atencion.png";
import ubicanos from "./icons/ubicanos.png";
import buscar from "./icons/buscar.png";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-2">
      <div className="container-fluid d-flex justify-content-between">
        <Link to="/" className="navbar-brand">
          <img src={logo} height={48} alt="Logo" style={{ width: 'auto', maxWidth: '150px' }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-none d-lg-flex nav-group nav-desktop ms-auto">
            <div className="nav-group btn-md rounded bg-primary text-light me-1">
              <Link className="text-decoration-none" to="/Registro">
                <button type="button" className="btn py-auto my-2 d-flex text-light align-items-center justify-content-center">
                  Banca por Internet
                  <img className="ms-2" src={mouse} width={16} height={16} alt="" />
                </button>
              </Link>
            </div>

            <div className="nav-group btn-md rounded bg-primary text-light me-2">
              <Link to="/login" className="me-2">
                <button type="button" className="border-end btn text-light text-center pe-2">
                  <img src={personas} width={16} height={16} alt="" />
                  Personas
                </button>
              </Link>
              <Link to="/login" className="me-2">
                <button type="button" className="border-end btn text-light text-center pe-2">
                  <img src={empresas} width={16} height={16} alt="" />
                  Empresas
                </button>
              </Link>
              <button type="button" className="border-end btn text-light text-center pe-2">
                <img src={lonuevo} width={16} height={16} alt="" />
                Lo Nuevo
              </button>
              <button type="button" className="btn text-light p-2 text-center m-1">
                <img src={atencion} width={16} height={16} alt="" />
                Atención al Cliente
              </button>
            </div>

            <div className="ms-2 nav-group btn-md rounded bg-primary">
              <button type="button" className="border-end btn text-light text-center pe-2 me-2">
                <img src={ubicanos} width={16} height={16} alt="" />
                Ubicanos
              </button>
              <button type="button" className="btn text-light p-2 text-center m-1 me-2">
                <img src={buscar} width={16} height={16} alt="" />
                Buscar
              </button>
            </div>
          </div>

          {/* Navbar para Mobile */}
          <ul className="navbar-nav d-lg-none">
            <li className="nav-item"><Link to="/Registro" className="nav-link">Banca por Internet</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link">Personas</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link">Empresas</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link">Lo Nuevo</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link">Atención al Cliente</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link">Ubicanos</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link">Buscar</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
