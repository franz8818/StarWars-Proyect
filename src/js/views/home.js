import React from "react";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import { Link, useParams } from "react-router-dom";

export const Home = () => (
  <>
    <div clasName="container">
      
      <h5 className="titulo ms-3 mt-3"> Characters </h5>
        <CardCharacter />

      <h5 className="ms-3 mt-3"> Planets </h5>
        <CardPlanets />

    </div>
  </>
);
