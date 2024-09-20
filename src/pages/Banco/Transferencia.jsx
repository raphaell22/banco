import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { backgroundBank } from "./Banco";
import iconTrash from "../../icons/trashIcon.png";
import iconSend from "../../icons/sendIcon.png";

const Transferencia = () => {
  return (
    <div style={backgroundBank}>
      <Nav />
      <div className="container mt-2 d-flex bg-transparent flex-column align-items-center">
        <h2
          className="bg-primary text-light text-center m-0 fw-bold"
          style={{ display: "inline-block", padding: "0.5rem" }}
        >
          TRANSFERENCIAS
        </h2>
        <div className="mt-0 border-2 border-primary card text-primary rounded-3 w-100">
          <div className="card-header m-2 p-2 flex-column bg-transparent border-0">
            <div className="d-block">
              <span className="border border-primary rounded-4 m-2 p-1">
                Cuenta Corriente C/Intereses 0000-****-**-****0000
              </span>
            </div>
            <div className="d-block">
              <span className="m-2 fw-bold">Saldo disponible: 0.00 Bs.</span>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="container-fluid">
              <div className="row">
                <div className="col fw-bold">
                  Haga click en el directorio de pagos para seleccionar los
                  datos del beneficiaro:
                </div>
                <div className="col">
                  <Link to="/Banco/Directorio" state={{home:"false"} /*indica que mostrará el directorio desde trasnfer*/}>
                  <button type="button" className="btn btn-primary">
                    Pago Frecuente
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <form className="m-2" action="">
              <div className="form-group row mb-2">
                <label
                  htmlFor="accountNumber"
                  className="col-sm-2 col-form-label fw-bold"
                >
                  Número de cuenta:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary w-50"
                    id="accountNumber"
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label
                  htmlFor="destinationBank"
                  className="col-sm-2 col-form-label"
                >
                  Banco destino:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary w-50"
                    id="destinationBank"
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label
                  htmlFor="identityNumber"
                  className="col-sm-2 col-form-label fw-bold"
                >
                  Número de identidad:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary w-50"
                    id="identityNumber"
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label htmlFor="amount" className="col-sm-2 col-form-label fw-bold">
                  Monto:
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary w-50"
                    id="amount"
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label
                  htmlFor="concept"
                  className="col-sm-2 col-form-label fw-bold"
                >
                  Concepto:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary w-50"
                    id="concept"
                  />
                </div>
              </div>
              <div className="form-group row ms-4 mb-2">
                <label htmlFor="checkFreq">
                  <input id="checkFreq" type="checkbox" />
                  Agregar a contactos frecuentes
                </label>
              </div>
              <div className="form-group row mb-2">
                <div className="col-sm-4 offset-sm-2">
                  <button type="button" className="btn btn-primary">
                    Cancelar
                    <img
                      className="ms-2"
                      src={iconTrash}
                      width={28}
                      height={28}
                    />
                  </button>
                </div>
                <div className="col-sm-5">
                  <button type="submit" className="btn btn-primary">
                    Transferir
                    <img
                      className="ms-2"
                      src={iconSend}
                      width={28}
                      height={28}
                    />
                  </button>
                </div>
              </div>
            </form>
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

export default Transferencia;
