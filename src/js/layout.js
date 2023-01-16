import React from "react"; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.js";

import Details from "./views/details.js";
import { Single } from "./views/single.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      {/* FUNCIONA COMO ROUTER, MANEJANDO VISTAS, SE ENCARGA DE HACER EL MATCH */}
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>{" "}
            <Route exact path="/details/:type">
              <Details />
            </Route>{" "}
            <Route exact path="/single/:theid">
              <Single />
            </Route>{" "}
            <Route>
              <h1> Not found! </h1>{" "}
            </Route>{" "}
          </Switch>{" "}
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
