import React from "react";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import DetailsCharacters from "../component/detailsCharacters.jsx";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <h1 className="background-color:DodgerBlue;"> Characters </h1>{" "}
    <div className="overflow-auto d-flex container-flex">
      <CardCharacter />
      <CardCharacter />
      <CardCharacter />
      <CardCharacter />
      <CardCharacter />
      <CardCharacter />
      <CardCharacter />
      <CardCharacter />
      <CardCharacter />
    </div>{" "}
    <h1> Planets </h1>{" "}
    <div className="overflow-auto d-flex container-flex">
      <CardPlanets />
      <CardPlanets />
      <CardPlanets />
      <CardPlanets />
    </div>{" "}
  </>
);
