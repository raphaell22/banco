import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //libreria para las redirecciones (npm-react-router-dom)
import Principal from "./Principal";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import MasInfor from "./pages/MasInfo";
import Registro from "./pages/Registro";
import SomosBanco from "./pages/SomosBanco";
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
    </Routes>
  </BrowserRouter>
);
