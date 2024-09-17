// Main.js

import { Info } from "./Info";
import { ImageCarousel } from "./ImageCarousel";
import masInfo from "./assets/img/masinfo.png";
import chat from "./assets/img/chateaConNosotros.png";

export function Principal() {
  return (
    <div className="container-fluid mt-2">
      <ImageCarousel />
      <br />
      <br />
      <Info />
      <br />
      <div className="container row mt-4 mb-3">
        <div className="col">
          <img className="img-fluid" src={masInfo} />
        </div>
        <div className="col text-end">
          <img className="img-fluid" src={chat} />
        </div>
      </div>
      <br />
    </div>
  );
}
