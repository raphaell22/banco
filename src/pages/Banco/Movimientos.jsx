import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { backgroundBank } from "./Banco";
import FooterBanco from "./FooterBanco";
import iconSearch from "../../icons/buscar_fill.png";

const Movimientos = () => {
  const rows = []; // Inicializa un array para almacenar las filas de relleno

  for (let index = 0; index < 8; index++) {
    rows.push(
      <tr key={index}>
        <td></td> {/* Celdas vacías de relleno*/}
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <div style={backgroundBank}>
      <Nav />
      <div className="container mt-3 d-flex bg-transparent flex-column align-items-center">
        <h2
          className="bg-primary text-light text-center m-0 fw-bold"
          style={{ display: "inline-block", padding: "0.25rem" }}
        >
          CONSULTA DE MOVIMIENTOS
        </h2>
        <div className="mt-0 card bg-transparent border-0 w-100">
          <div className="card-body pt-0">
            <div className="table-responsive bg-white rounded-3">
              <table className="table table-borderless text-center align-middle">
                <thead className="border-bottom border-primary text-primary p-2">
                  <tr>
                    <th>Fecha</th>
                    <th>Descripción</th>
                    <th>Referencia</th>
                    <th>Monto</th>
                    <th>Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                  <tr>
                    <td colSpan={4}></td>
                    <td className="text-end">
                      <div className="input-group bg-gradient-secondary p-1">
                        <img
                          className="m-0"
                          src={iconSearch}
                          width={40}
                          height={40}
                        />
                        <input
                          className="form-control border-0 border-bottom border-primary text-dark bg-transparent"
                          placeholder="Buscar..."
                          type="text"
                        ></input>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <Link className="btn" to="/Banco/Inicio">
            <button
              className="btn btn-primary border-primary text-center text-light fw-bold"
              type="button"
            >
              Regresar
            </button>
          </Link>
        </div>
      </div>
      <FooterBanco />
    </div>
  );
};

export default Movimientos;
