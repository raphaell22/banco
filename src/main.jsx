import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //libreria para las redirecciones (npm-react-router-dom)
import Principal from "./Principal";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import MasInfor from "./pages/MasInfo";
import Registro from "./pages/Registro";
import SomosBanco from "./pages/SomosBanco";
import Banco from "./pages/Banco/Banco";
import Movimientos from "./pages/Banco/Movimientos";
import Directorio from "./pages/Banco/Directorio";
import DirectorioCrud from "./pages/Banco/DirectorioCrud";
import Transferencia from "./pages/Banco/Transferencia";
import CambioContra from "./pages/Banco/CambioContra";
import LoNuevo from "./pages/LoNuevo";
import Servicios from "./pages/Servicios";
import Atencion from "./pages/Atencion";
import "./style.css";


const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Principal />} />
      <Route path="/" element={<Principal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/MasInfo" element={<MasInfor />} />
      <Route path="/SomosBanco" element={<SomosBanco />} />
      <Route path="/LoNuevo" element={<LoNuevo/>} />
      <Route path="/Servicios" element={<Servicios/>} />
      <Route path="/Atencion" element={<Atencion/>} />
      <Route path="/Banco/Inicio" element={<Banco />} />
      <Route path="/Banco/Movimientos" element={<Movimientos />} />
      <Route path="/Banco/Directorio" element={<Directorio />} />
      <Route path="/Banco/Directorio/Crud" element={<DirectorioCrud />} />
      <Route path="/Banco/Transferencia" element={<Transferencia />} />
      <Route path="/Banco/CambioContra" element={<CambioContra />} />
    </Routes>
  </BrowserRouter>
);
