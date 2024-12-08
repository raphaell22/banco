import { Link } from "react-router-dom";
import logo from "../../icons/banco_logo.png";
import iconExit from "../../icons/exit.png";
import AngleDown from "../../icons/iconAngleDown.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Nav() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState(''); 

  useEffect(() => {
    const token = sessionStorage.getItem('tk');
    if(!token){
      navigate('/login');
    }else{
      let userData = atob(sessionStorage.getItem('dt'));
      let mis_datos = JSON.parse(userData);
      setNombre(mis_datos.first_name + ' '+ mis_datos.last_name);
    }
  })

  return (
    <div>
      <nav className="navbar navbar-expand-lg mb-4 bg-white p-0 border-bottom">
        <div className="container-fluid">
          <div className="navbar-brand m-2">
            <Link to="/Banco/Inicio">
              <img src={logo} height={54} alt="Logo" />
            </Link>
          </div>

          <div className="nav-group d-flex me-2">

            <Link to="/login">
              <button type="button" className="btn pe-2 me-2">
                <img title="Cerrar Sesión" src={iconExit} />
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg p-0 mt-4 me-2">
        <div className="container-fluid">
          <div className="d-flex w-100 btn-md rounded-3 bg-primary text-light">
            <Link to="/Banco/Movimientos" className="flex-fill">
              <button type="button" className=" btn text-light text-center p-1">
                <img className="me-1" width={32} height={32} src={AngleDown} />
                Consultas
              </button>
              <span className="nav-separator" />
            </Link>

            <Link to="/Banco/Transferencia" className="flex-fill">
              <button type="button" className=" btn text-light text-center p-1">
                <img className="me-1" width={32} height={32} src={AngleDown} />
                Transferencias
              </button>
            </Link>

            <Link to="/Banco/Movimientos" className="flex-fill">
              <button type="button" className=" btn text-light text-center p-1">
                <img className="me-1" width={32} height={32} src={AngleDown} />
                Movimientos
              </button>
            </Link>

            <Link to="/Banco/Directorio" className="flex-fill">
              <button type="button" className=" btn text-light text-center p-1">
                <img className="me-1" width={32} height={32} src={AngleDown} />
                Administrar Contactos
              </button>
            </Link>

            <Link to="/Banco/CambioContra" className="flex-fill">
              <button type="button" className="btn text-light text-center p-1">
                <img className="me-1" width={32} height={32} src={AngleDown} />
                Actualizar Contraseñas
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg p-0 m-0 mt-2 w-100">
        <div className="container-fluid bg-primary text-light justify-content-end pe-5">
          <h5>{nombre}</h5>
        </div>
      </nav>
    </div>
  );
}
