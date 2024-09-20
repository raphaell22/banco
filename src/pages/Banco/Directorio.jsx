import { Nav } from "./Nav";
import { Link,useLocation } from "react-router-dom";
import { backgroundBank } from "./Banco";
import iconErase from "../../icons/iconErase.png";

const Directorio = () => {

  const navLocation = useLocation().state || {};

  const btnBack = (navLocation.home == "false")
              ?
              <Link to="/Banco/Transferencia">
              <button type="button" className="btn btn-primary rounded-3 m-2">
                Regresar
              </button>
            </Link>
            : 
            ``;

  return (
    <div style={backgroundBank}>
      <Nav />
      <div className="container mt-2 d-flex bg-transparent flex-column align-items-center">
        <h2
          className="bg-primary text-light text-center m-0 fw-bold"
          style={{ display: "inline-block", padding: "0.5rem" }}
        >
          DIRECTORIO DE CONTACTOS
        </h2>
        <div className="mt-0 border-2 border-primary card text-primary rounded-3 w-100">
          <div className="card-body pt-0">
            <table className="table w-100 table-borderless text-primary">
              <thead className="border-primary border-bottom p-2">
                <td>Alias</td>
                <td>Descripción</td>
                <td>Beneficiario</td>
                <td>Número</td>
                <td>Eliminar</td>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-bold">
                  <Link className="text-primary" to="/Banco/Directorio/Crud" state={{modify:true}} >
                    Hermano
                    </Link>
                    </td>
                  <td>CUENTA</td>
                  <td>
                    <Link className="text-primary" to="/Banco/Directorio/Crud" state={{modify:true}} >
                      Ana Sánchez
                    </Link>
                  </td>
                  <td>1111-****-**-****1111</td>
                  <td>
                    <button className="btn" type="button">
                      <img src={iconErase} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold">
                    <Link className="text-primary" to="/Banco/Directorio/Crud" state={{modify:true}} >
                    Primo
                    </Link>
                  </td>
                  <td>CUENTA</td>
                  <td>
                    <Link className="text-primary" to="/Banco/Directorio/Crud" state={{modify:true}} >
                    Juan Parra
                    </Link>
                  </td>
                  <td>1111-****-**-****1111</td>
                  <td>
                    <button className="btn" type="button">
                      <img src={iconErase} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-transparent text-center">
          <div className=" d-flex">
            {btnBack}
            <Link to="/Banco/Directorio/Crud">
              <button type="button" className="btn btn-primary rounded-3 m-2">
                Incluir
              </button>
            </Link>
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

export default Directorio;
