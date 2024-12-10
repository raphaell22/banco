import React from "react";

const Comprobante = ({ transferData }) => {
  if (!transferData) return null;
  const fecha = new Date()
  return (
    <div className="comprobante">
      <h2>Comprobante de Transferencia</h2>
      <p><strong>Fecha:</strong>{transferData.fecha}</p>
      <p><strong>Número de Cuenta:</strong> {transferData.account_number}</p>
      <p><strong>Monto:</strong> {transferData.amount}</p>
      <p><strong>Concepto:</strong> {transferData.description}</p>
    </div>
  );
};

export default Comprobante;
