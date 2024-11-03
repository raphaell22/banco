import { Nav } from "./Nav";
import { backgroundBank } from "./Banco";
import FooterBanco from "./FooterBanco";
import refreshIcon from "../../icons/refreshIcon.png";

const CambioContra = () => {
  return (
    <div style={backgroundBank}>
      <Nav />
      <div className="container mt-3 d-flex bg-transparent flex-column align-items-center">
        <h2
          className="bg-primary text-light text-center m-0 fw-bold"
          style={{ display: "inline-block", padding: "0.25rem" }}
        >
          ACTUALIZAR CONTRASEÑA
        </h2>
        <div className="mt-0 card border-3 rounded-3 border-primary w-75">
          <div className="card-body pt-0">
            <form className="text-primary p-3 mt-4" action="#">
              <label className="fw-bold" htmlFor="vieja">
                Contraseña Actual
              </label>
              <div className="input-group bg-gradient-secondary rounded-3 mb-4">
                <input
                  required
                  id="vieja"
                  type="password"
                  className="form-control bg-transparent border-primary border-0 border-bottom border-3"
                />
              </div>
              
              
              <label className="fw-bold" htmlFor="nueva">
                Nueva Contraseña
              </label>
              <div className="input-group bg-gradient-secondary rounded-3 mb-3">
                <input
                  required
                  id="nueva"
                  type="password"
                  className="form-control bg-transparent border-primary border-0 border-bottom border-3"
                />
              </div>

              <label className="fw-bold" htmlFor="nueva">
                Confirmar Contraseña
              </label>
              <div className="input-group bg-gradient-secondary rounded-3 mb-3">
                <input
                  required
                  id="nueva"
                  type="password"
                  className="form-control bg-transparent border-primary border-0 border-bottom border-3"
                />
              </div>


              <div className="text-center container">
                <button
                  className="btn btn-md p-2 btn-primary rounded-4"
                  type="submit"
                >
                  Actualizar
                  <img src={refreshIcon} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterBanco />
    </div>
  );
};

export default CambioContra;
