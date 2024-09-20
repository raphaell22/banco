import { Link, useLocation } from "react-router-dom";
import { Nav } from "./Nav";
import { backgroundBank } from "./Banco";

const DirectorioCrud = () => {
  const prevLocation = useLocation().state || {}; //recibo el objeto state pasado por argumento en link del Directorio

  return (
    <div style={backgroundBank}>
      <Nav />
      <div className="container mt-2 d-flex bg-transparent flex-column align-items-center">
        <h2
          className="bg-primary text-light text-center m-0 fw-bold"
          style={{ display: "inline-block", padding: "0.5rem" }}
        >
          { (prevLocation.modify == true) ? 'MODIFICAR CONTACTO' : 'INCLUIR CONTACTO'}
        </h2>
        <div className="mt-0 border-2 border-primary card text-primary rounded-3 w-100">
          <div className="card-body pt-0">
            <form action="#">
              <div className="row m-3">
                <div className="offset-1 col text-start">
                  <label htmlFor="alias">Alias:</label>
                </div>
                <div className="col">
                  <input
                    id="alias"
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary"
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="offset-1 col text-start">
                  <label htmlFor="tipo">Tipo</label>
                </div>
                <div className="col">
                  <input
                    id="tipo"
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary"
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="offset-1 col text-start">
                  <label htmlFor="beneficiario">Beneficiario</label>
                </div>
                <div className="col">
                  <input
                    id="beneficiario"
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary"
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="offset-1 col text-start">
                  <label htmlFor="identificacion">
                    Número de Identificación
                  </label>
                </div>
                <div className="col">
                  <input
                    id="identificacion"
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary"
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="offset-1 col text-start">
                  <label htmlFor="banco-nombre">Nombre del Banco:</label>
                </div>
                <div className="col">
                  <input
                    id="banco-nombre"
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary"
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="offset-1 col text-start">
                  <label htmlFor="cod-cliente">Código Cuenta Cliente:</label>
                </div>
                <div className="col">
                  <input
                    id="cod-cliente"
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-transparent text-center">
          <div className=" d-flex">
            <Link to="/Banco/Directorio">
              <button type="button" className="btn btn-primary rounded-3 m-2">
                Regresar
              </button>
            </Link>
            <button type="button" className="btn btn-primary rounded-3 m-2">
              Aceptar
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <span className="fw-bold text-dark">
          © Banco Universitario. Todos los derechos reservados
        </span>
      </div>
    </div>
  );
};

export default DirectorioCrud;
