// Main.js

import {Info} from './Info';
import {ImageCarousel} from './ImageCarousel';



export function Principal () {
  return (
    <div className="container-fluid mt-2">
      <ImageCarousel />
      <br /><br />
      <Info />
    </div>
  );
}

