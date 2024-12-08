import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Nav } from "./Nav";
import { backgroundBank } from "./Banco";

const DirectorioCrud = () => {
  const prevLocation = useLocation().state || {}; // Recibo el objeto state pasado por argumento en link del Directorio
  const [alias, setAlias] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (prevLocation.modify) {
      // Cargar los datos del contacto a modificar
      const contactData = prevLocation.contact;
      setAlias(contactData.alias);
      setAccountNumber(contactData.account_number);
      setDescription(contactData.description);
    }
  }, [prevLocation]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userData = atob(sessionStorage.getItem("dt"));
    const mis_datos = JSON.parse(userData);
    const token = mis_datos.jwt;

    const myHeaders = new Headers();
    myHeaders.append("Accept-Language", "es");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: prevLocation.modify ? "PATCH" : "POST",
      headers: myHeaders,
      body: JSON.stringify({
        alias: alias,
        description: description,
      }),
      redirect: "follow",
    };

    const url = prevLocation.modify
      ? `http://localhost:3000/v1/client/contact/${prevLocation.contact.id}`
      : "http://localhost:3000/v1/client/contact";

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert(result.message);
        if (result.message === 'Contacto registrado con éxito' || result.message === 'Contacto actualizado con éxito') {
          navigate("/Banco/Directorio");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div style={backgroundBank}>
      <Nav />
      <div className="container mt-2 d-flex bg-transparent flex-column align-items-center">
        <h2
          className="bg-primary text-light text-center m-0 fw-bold"
          style={{ display: "inline-block", padding: "0.5rem" }}
        >
          {prevLocation.modify ? "MODIFICAR CONTACTO" : "INCLUIR CONTACTO"}
        </h2>
        <div className="mt-0 border-2 border-primary card text-primary rounded-3 w-100">
          <div className="card-body pt-0">
            <form onSubmit={handleFormSubmit}>
              <div className="row m-3">
                <div className="offset-1 col text-start">
                  <label htmlFor="alias">Alias:</label>
                </div>
                <div className="col">
                  <input
                    id="alias"
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="offset-1 col text-start">
                  <label htmlFor="account_number">Código Cuenta Cliente:</label>
                </div>
                <div className="col">
                  <input
                    id="account_number"
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                    disabled={prevLocation.modify} // Deshabilitado en modo modificación
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="offset-1 col text-start">
                  <label htmlFor="description">Descripción:</label>
                </div>
                <div className="col">
                  <input
                    id="description"
                    type="text"
                    className="form-control border-0 bg-gradient-secondary border-bottom border-primary"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="bg-transparent text-center">
                <div className="d-flex">
                  <Link to="/Banco/Directorio">
                    <button type="button" className="btn btn-primary rounded-3 m-2">
                      Regresar
                    </button>
                  </Link>
                  <button type="submit" className="btn btn-primary rounded-3 m-2">
                    Aceptar
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

export default DirectorioCrud;
