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
    <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-center p-2">
      <div className="navbar-brand m-2">
        <img src={logo} height={54} alt="Logo" />
      </div>
      <div className="nav-group btn-md rounded bg-primary text-light me-4">
        <button type="button" className="btn text-light text-center d-flex">
          Banca por<br></br> Internet
          <img className="mt-2" src={mouse} width={29} height={32} alt="" />
        </button>
      </div>
      <div className="nav-group btn-md rounded bg-primary text-light me-2">
        <button
          type="button"
          className="border-end btn text-light text-center pe-2 me-2"
        >
          <img src={personas} width={28} height={28} alt="" />
          Personas
        </button>
        <button
          type="button"
          className="border-end btn text-light text-center pe-2 me-2"
        >
          <img src={empresas} width={28} height={28} alt="" />
          Empresas
        </button>
        <button
          type="button"
          className="border-end btn text-light text-center pe-2 me-2"
        >
          <img src={lonuevo} width={28} height={28} alt="" />
          Lo Nuevo
        </button>
        <button
          type="button"
          className="btn text-light p-2 text-center m-1 me-2"
        >
          <img className="mt-2" src={atencion} width={28} height={28} alt="" />
          Atención al Cliente
        </button>
      </div>
      <div className="ms-2 nav-group btn-md rounded bg-primary">
        <button
          type="button"
          className="border-end btn text-light text-center pe-2 me-2"
        >
          <img src={ubicanos} width={29} height={32} alt="" />
          Ubicanos
        </button>
        <button
          type="button"
          className="btn text-light p-2 text-center m-1 me-2"
        >
          <img className="mt-2" src={buscar} width={28} height={28} alt="" />
          Buscar
        </button>
      </div>
    </nav>
  );
}
