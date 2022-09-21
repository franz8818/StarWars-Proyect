//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//include your index.scss file into the bundle
import "../styles/index.css"; 

//import you r own components
import Layout from "./layout";

//render your react application
ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.querySelector("#app")
);
