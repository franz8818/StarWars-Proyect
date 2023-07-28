import React from "react"; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import Home from "./views/home.jsx";
import { Single } from "./views/single.js";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import DetailsCharacters from "./views/detailsCharacters.jsx";
import DetailsPlanets from "./views/detailsPlanets.jsx";

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
            <Route exact path="/detailsCharacters/:id">
              <DetailsCharacters />
            </Route>{" "}
            <Route exact path="/detailsPlanets/:id">
              <DetailsPlanets />
            </Route>{" "}
            <Route exact path="/single/:theid">
              <Single />
            </Route>{" "}
            <Route>
              <h1> Not found! </h1>{" "}
            </Route>{" "}
          </Switch>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
