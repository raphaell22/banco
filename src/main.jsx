import { createRoot } from "react-dom/client";
import { Navbar } from "./Navbar";
import { Principal } from "./Principal";
import { Footer } from "./Footer";
import "./style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navbar />
    <Principal />
    <Footer />
  </div>
);
