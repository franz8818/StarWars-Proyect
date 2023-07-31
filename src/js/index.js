//import react into the bundle CONFIGURACION -> USAR BOOSTRAP O ESTILOS PROPIOS
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/info.css";

//import you r own components
import Layout from "./layout.jsx";

//render your react application
ReactDOM.render( < Layout /> , document.querySelector("#app"));