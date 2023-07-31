import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import "../../styles/others.css";
import CardCharacter from "../component/cardCharacter.jsx";
import CardPlanet from "../component/cardPlanet.jsx";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
const Home = () => {
  const { store, actions } = useContext(Context);
  return (
  <div className="container">
      {/* <h6 className="titulo ms-4"> Characters </h6> */}
      <div className="row">
      <CardCharacter />
    </div>
      {/* <h6 className="titulo ms-4"> Planets </h6> */}
      <div className="row">
      <CardPlanet />
      </div>
  </div>
  );
};
export default Home;

