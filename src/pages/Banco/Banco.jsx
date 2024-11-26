import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import FooterBanco from "./FooterBanco";
import { useNavigate } from "react-router-dom";

export const backgroundBank = {
  background: "linear-gradient(to bottom, #ffffff 20%, #085f63)",
  height: "100vh",
  position: "relative",
};

const Banco = () => {
  const [cuenta, setCuenta] = useState('0000-0000-00-0000000000');
  const [saldo, setSaldo] = useState('0,00');
  const navigate = useNavigate();

  useEffect(() => {
    let token = sessionStorage.getItem('tk');
    if (!token) {
      navigate('/login');
    } else {
      const userData = atob(sessionStorage.getItem('dt'));
      const mis_datos = JSON.parse(userData);
      token = mis_datos.jwt;
      const myHeaders = new Headers();
      myHeaders.append("Accept-Language", "es");
      myHeaders.append("Authorization", `Bearer ${token}`);
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      setCuenta(mis_datos.account_number);

      fetch("http://localhost:3000/v1/client/user/balance", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          let data = JSON.parse(result)['data'];
          setSaldo(data.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
        })
        .catch((error) => console.error(error));
    }
  }, [navigate]);

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
                    <td>{cuenta}</td>
                    <td>Bs. {saldo}</td>
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
