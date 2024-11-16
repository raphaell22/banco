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
        <br />
        <br />
        <Info />
        <br />
        <div className="container-fluid row mt-4 mb-3">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Link to="/MasInfo">
              <img className="img-fluid" src={imgMasInfo} />
            </Link>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 text-end">
            <img className="img-fluid" src={chat} />
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
}

export default Principal;
