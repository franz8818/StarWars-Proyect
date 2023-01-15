import React from "react";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import { Link, useParams } from "react-router-dom";

export const Home = () => (
  <>
  <div clasName="container"> 
  

    <h4 className="titulo ms-3"> Characters </h4>
    
    
    <CardCharacter />
    
    
    <h4 className="ms-3"> Planets </h4>
    
      <CardPlanets />
    
    </div>
  </>
);
