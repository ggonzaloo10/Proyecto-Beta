console.log('hola parcel')

import './sass/site.scss';
import './sass/style.scss';
import './sass/header.scss';
import './sass/utilities.scss';
import './sass/footer.scss';
import './sass/nav.scss';
import './sass/mediaqueries.scss';

import { saludar } from "./module.js";

console.log(saludar())



    document.getElementById("burger").addEventListener("click", (event) => {
        document.getElementById("menu").classList.toggle("active");
      });
    
    

