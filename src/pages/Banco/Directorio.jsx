import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { backgroundBank } from "./Banco";
import iconErase from "../../icons/iconErase.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Directorio = () => {
  const navLocation = useLocation().state || {};
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0); // Para almacenar el número total de registros
  const [searchQuery, setSearchQuery] = useState("");

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
        let newRows = data["data"].map((item, index) => ({
          alias: item.alias,
          description: item.description,
          id: item.id,
          account_number: item.account_number,
        }));
        setRows(newRows);
        setTotalRows(data["total"]); // Establece el número total de registros
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchContacts(currentPage);
  }, [currentPage]); // Actualiza al cambiar la página

  const handleClick = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
  };

  const filteredRows = rows.filter((row) => {
    return Object.keys(row).some(key =>
      row[key].toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este contacto?")) {
      const userData = atob(sessionStorage.getItem("dt"));
      const mis_datos = JSON.parse(userData);
      const token = mis_datos.jwt;

      const myHeaders = new Headers();
      myHeaders.append("Accept-Language", "es");
      myHeaders.append("Authorization", `Bearer ${token}`);
      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`http://localhost:3000/v1/client/contact/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          alert(result.message);
          if (result.message === 'Contacto eliminado con éxito') {
            // Volver a cargar la lista de contactos
            fetchContacts(currentPage);
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const totalPages = Math.ceil(totalRows / rowsPerPage); // Calcula el número total de páginas

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${i === currentPage ? "active" : ""}`}>
          <a className="page-link" href="#" onClick={(e) => handleClick(e, i)}>
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  const btnBack = (navLocation.home === "false")
    ? (
      <Link to="/Banco/Transferencia">
        <button type="button" className="btn btn-primary rounded-3 m-2">
          Regresar
        </button>
      </Link>
    ) : null;

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
            <div className="table-responsive bg-white rounded-3">
              <table className="table w-100 table-borderless text-primary">
                <thead className="border-primary border-bottom p-2">
                  <tr>
                    <th>Alias</th>
                    <th>Descripción</th>
                    <th>Número de Cuenta</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <Link className="text-primary" to="/Banco/Directorio/Crud" state={{ modify: true, contact: row }}>
                          {row.alias}
                        </Link>
                      </td>
                      <td>{row.description}</td>
                      <td>{row.account_number}</td>
                      <td>
                        <button className="btn" type="button" onClick={() => handleDelete(row.id)}>
                          <img src={iconErase} alt="Eliminar" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer p-1 d-flex bg-transparent">
              {totalPages > 1 && (
                <nav className="w-100 m-auto">
                  <ul className="pagination m-auto">
                    {renderPageNumbers()}
                  </ul>
                </nav>
              )}
              <div className="input-group bg-gradient-secondary p-1 w-100 m-auto">
                <input
                  className="form-control border-0 border-bottom border-primary text-dark bg-transparent"
                  placeholder="Buscar..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent text-center">
          <div className="d-flex">
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
