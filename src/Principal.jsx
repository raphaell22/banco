// Main.js
import { Info } from "./Info";
import { Link } from "react-router-dom";
import { ImageCarousel } from "./ImageCarousel";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import imgMasInfo from "./assets/img/masinfo.png";
import chat from "./assets/img/chateaConNosotros.png";

export function Principal() {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-2">
        <ImageCarousel />
        
      </div>
      <Footer />
    </>
  );
}

export default Principal;
