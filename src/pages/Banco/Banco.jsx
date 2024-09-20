import React from "react";
import { Nav } from "./Nav";
import FooterBanco from "./FooterBanco";

export const backgroundBank = {
  background: "linear-gradient(to bottom, #ffffff 20%, #085f63)",
  height: "100vh",
  position: "relative", // Agregar para que el pie se posicione correctamente
};

const Banco = () => {
  return (
    <div style={backgroundBank}>
      <Nav />
      <div className="container d-flex flex-column align-items-end">
        <p className="m-0 text-end text-muted m-0">
          Para cualquier información comunicarse al +58 212-555-5555
        </p>
      </div>
      <div className="container mt-5 d-flex bg-transparent flex-column align-items-center">
        <h2
          className="bg-primary text-light text-center m-0"
          style={{ display: "inline-block", padding: "0.5rem" }}
        >
          CUENTAS
        </h2>
        <div className="mt-0 card bg-transparent border-0 w-100">
          <div className="card-body pt-0">
            <div className="table-responsive">
              <table className="table table-borderless text-center align-middle">
                <thead className="bg-new-secondary text-light">
                  <tr>
                    <th>Descripción</th>
                    <th>Código Cuenta Cliente</th>
                    <th>Saldo Disponible</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cuenta Corrienta C/Intereses</td>
                    <td>0000-0000-00-0000000000</td>
                    <td>0.00 Bs.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <FooterBanco />
    </div>
  );
};

export default Banco;
