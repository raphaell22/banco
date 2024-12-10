import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { backgroundBank } from "./Banco";
import FooterBanco from "./FooterBanco";
import iconSearch from "../../icons/buscar_fill.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Movimientos = () => {
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovements = (pageNumber) => {
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
      `http://localhost:3000/v1/client/movement?page=${pageNumber}&page_size=10`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result)["data"];
        let newRows = data.map((item, index) => ({
          date: new Date(item.created_at).toLocaleDateString(),
          description: item.description,
          id: item.id,
          amount: item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"),
          multiplier:(item.multiplier == 1) ? '+ Credito' : '- Debito',
          balance: item.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"),
        }));
        setRows(newRows);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchMovements(currentPage);
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

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) { // Suponiendo un máximo de 10 páginas
      pageNumbers.push(
        <li key={i} className={`page-item ${i === currentPage ? "active" : ""}`}>
          <a className={`page-link ${i === currentPage ? "bg-primary border-primary" : ""}`} href="#" onClick={(e) => handleClick(e, i)}>
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div style={backgroundBank}>
      <Nav />
      <div className="container mt-3 d-flex bg-transparent flex-column align-items-center">
        <h2
          className="bg-primary text-light text-center m-0 fw-bold"
          style={{ display: "inline-block", padding: "0rem" }}
        >
          CONSULTA DE MOVIMIENTOS
        </h2>
        <div className="mt-0 card bg-transparent border-0 w-100">
          <div className="card-body pt-0">
            <div className="table-responsive bg-white rounded-3">
              <table className="table table-sm table-borderless table-hover text-center">
                <thead className="border-bottom border-primary text-primary p-2">
                  <tr>
                    <th width="10%">Fecha</th>
                    <th width="40%">Descripción</th>
                    <th width="10%">Referencia</th>
                    <th width="12%">Monto</th>
                    <th width="10%">Tipo</th>
                    <th width="20%">Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((row, index) => (
                    <tr key={index}>
                      <td>{row.date}</td>
                      <td>{row.description}</td>
                      <td>#{row.id}</td>
                      <td>{row.multiplier == '+ Credito' ? '+' : '-'}{row.amount}</td>
                      <td  className={row.multiplier == '+ Credito' ? 'text-success' : 'text-danger'} >{row.multiplier}</td>
                      <td>{row.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer p-1 d-flex bg-transparent">
              <nav className="w-100 m-auto">
                <ul className="pagination m-auto">
                  {renderPageNumbers()}
                </ul>
              </nav>
              
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
