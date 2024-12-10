import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { backgroundBank } from "./Banco";
import iconTrash from "../../icons/trashIcon.png";
import iconSend from "../../icons/sendIcon.png";
import Comprobante from "./Comprobante";

const Transferencia = () => {
  const [cuenta, setCuenta] = useState("0000-0000-00-0000000000");
  const [saldo, setSaldo] = useState("0,00");
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [transferData, setTransferData] = useState(null);
  const [rowsPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);

  const [isChecked, setIsChecked] = useState(false);
  const verNombre = () => {
    setIsChecked(!isChecked);
  };

  const userData = atob(sessionStorage.getItem("dt"));

  const refreshSaldo = () => {
    const mis_datos = JSON.parse(userData);
    let token = mis_datos.jwt;
    const myHeaders = new Headers();
    myHeaders.append("Accept-Language", "es");
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    setCuenta(mis_datos.account_number);

    fetch("http://localhost:3000/v1/client/user/balance", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result)["data"];
        setSaldo(data.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    let token = sessionStorage.getItem("tk");
    if (!token) {
      navigate("/login");
    } else {
      refreshSaldo();
    }
  }, []);

  useEffect(() => {
    fetchContacts(currentPage);
  }, [currentPage]);

  const fetchContacts = (pageNumber) => {
    const userData = atob(sessionStorage.getItem("dt"));
    const mis_datos = JSON.parse(userData);
    const token = mis_datos.jwt;
    const myHeaders = new Headers();
    myHeaders.append("Accept-Language", "es");
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `http://localhost:3000/v1/client/contact?page=${pageNumber}&page_size=10`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        let newRows = data["data"].map((item) => ({
          alias: item.alias,
          description: item.description,
          id: item.id,
          account_number: item.account_number,
        }));
        setRows(newRows);
        setTotalRows(data["total"]);
      })
      .catch((error) => console.error(error));
  };

  const seleccionarContacto = (contacto) => {
    document.getElementById("accountNumber").value = contacto.account_number;
    document.getElementById("alias").innerHTML =
      `Alias: ${contacto.alias}` || "";
    document.getElementById("add-frequent").setAttribute("hidden", true);
    document.getElementById("close-modal").click(); // Cierra el modal
  };

  const resetForm = () => {
    document.getElementById("alias").innerHTML = "";
    document.getElementById("accountNumber").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("concept").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("add-frequent").removeAttribute("hidden");
    refreshSaldo();
    setIsChecked(false);
    fetchContacts(currentPage);
  };

  const showComprobante = () => {
    const modalElement = document.getElementById("mdl-comprobante");
    const modal = new window.bootstrap.Modal(modalElement);
    modal.show();
    modalElement.addEventListener("hidden.bs.modal", () => {
      const backdrops = document.querySelectorAll(".modal-backdrop");
      backdrops.forEach((backdrop) => backdrop.remove());
    });
  };

  const incluirFrecuente = () => {
    if (document.getElementById("nombre").value == "") {
      alert(
        "el nombre del contacto esta vacio, por favor digite un nombre de alias"
      );
      return;
    } else {
      const userData = atob(sessionStorage.getItem("dt"));
      const mis_datos = JSON.parse(userData);
      const token = mis_datos.jwt;

      const myHeaders = new Headers();
      myHeaders.append("Accept-Language", "es");
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          alias: document.getElementById("nombre").value,
          account_number: document.getElementById("accountNumber").value,
          description: document.getElementById("concept").value,
        }),
        redirect: "follow",
      };

      const url = "http://localhost:3000/v1/client/contact";

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const transferir = (event) => {
    event.preventDefault();
    alertify
      .confirm(
        "Está seguro(a) de Confirmar Esta Transacción?",
        function () {
          const accountNumber = document.getElementById("accountNumber").value;
          const amount = document.getElementById("amount").value;
          const concept = document.getElementById("concept").value;
          const frequent = document.getElementById("checkFreq").checked;

          if (frequent == true) {
            incluirFrecuente();
          }

          const userData = atob(sessionStorage.getItem("dt"));
          const mis_datos = JSON.parse(userData);
          const token = mis_datos.jwt;
          const myHeaders = new Headers();
          myHeaders.append("Accept-Language", "es");
          myHeaders.append("Authorization", `Bearer ${token}`);
          myHeaders.append("Content-Type", "application/json");
          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
              amount: parseFloat(amount),
              account_number: accountNumber,
              description: concept,
            }),
            redirect: "follow",
          };
          fetch("http://localhost:3000/v1/client/movement", requestOptions)
            .then((response) => response.json())
            .then((result) => {
              const today = new Date();
              const month = today.getMonth() + 1;
              const year = today.getFullYear();
              const date = today.getDate();
              const completeFecha = date + "/" + month + "/" + year;
              setTransferData({
                fecha: completeFecha,
                account_number: accountNumber,
                amount: parseFloat(amount).toFixed(2),
                description: concept,
              });
              showComprobante();

              resetForm();
            })
            .catch((error) => console.error("Error:", error));
        },
        function () {
          return;
        }
      )
      .set({
        title: "Confirmar Transacción",
        labels: { ok: "Confirmar", cancel: "Cancelar" },
      });
  };

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
              <span className="border border-primary rounded-4 m-2 p-1 px-2">
                Cuenta Corriente C/Intereses {cuenta}
              </span>
            </div>
            <div className="mt-2 d-block">
              <span className="m-2 fw-bold">Saldo disponible: Bs. {saldo}</span>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="container-fluid">
              <div className="row">
                <div className="col fw-bold">
                  <small>
                    Haga click en el directorio de pagos para seleccionar los
                    datos del beneficiaro:
                  </small>
                </div>
                <div className="col">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mdl-directorio"
                    className="btn btn-primary"
                  >
                    Directorio
                  </button>
                  <div
                    className="modal fade"
                    id="mdl-directorio"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="modalTitleId"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="modalTitleId">
                            Contactos
                          </h5>
                          <button
                            type="button"
                            id="close-modal"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <table className="table w-100 table-borderless text-primary">
                            <thead className="border-primary border-bottom p-2">
                              <tr>
                                <th>Alias</th>
                                <th>Descripción</th>
                                <th>Número de Cuenta</th>
                                <th>Acción</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, index) => (
                                <tr key={index}>
                                  <td>{row.alias}</td>
                                  <td>{row.description}</td>
                                  <td>{row.account_number}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      onClick={() => seleccionarContacto(row)}
                                    >
                                      Seleccionar
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="m-2" onSubmit={transferir}>
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
                  <small id="alias" className="text-muted"></small>
                </div>
              </div>
              {isChecked && (
                <div className="form-group row mb-2">
                  <label
                    htmlFor="nombre"
                    className="col-sm-2 col-form-label fw-bold"
                  >
                    Nombre:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control border-0 bg-gradient-secondary border-bottom border-primary w-50"
                      id="nombre"
                    />
                  </div>
                </div>
              )}
              <div className="form-group row mb-2">
                <label
                  htmlFor="amount"
                  className="col-sm-2 col-form-label fw-bold"
                >
                  Monto:
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    min="1"
                    step="0.1"
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
              <div className="form-group row mb-3">
                <div id="add-frequent" className="offset-2 col-sm-10">
                  <label htmlFor="checkFreq">
                    <input
                      id="checkFreq"
                      checked={isChecked}
                      onChange={verNombre}
                      type="checkbox"
                    />{" "}
                    Agregar a contactos frecuentes
                  </label>
                </div>
              </div>
              <div className="form-group row mb-2">
                <div className="col-sm-4 offset-sm-2">
                  <button
                    onClick={resetForm}
                    type="button"
                    className="btn btn-primary"
                  >
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
            <div
              className="modal fade"
              id="mdl-comprobante"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="mdl-comprobante"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fw-bold" id="mdl-comprobante">
                      Transferencia Exitosa!
                    </h4>
                    <button
                      type="button"
                      id="closeComprobante"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Comprobante transferData={transferData} />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
