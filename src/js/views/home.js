import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter.jsx";
import CardPlanets from "../component/cardPlanets.jsx";

export const Home = () => (
  <>
  <h1> Characters </h1>
    <div>
      
      <CardCharacter />
      <CardCharacter />
      <CardCharacter />
      <CardCharacter />
    </div>
	
	<h1> Planets </h1>

    <div>
	<CardPlanets />
	<CardPlanets />
	<CardPlanets />
	<CardPlanets />
	</div>
  </>
);
