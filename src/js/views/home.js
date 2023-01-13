import React from "react";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import { Link, useParams } from "react-router-dom";

export const Home = () => (
  <>
  <div clasName="container"> 
  {/* //para que sirve container-flex? */}
    <h4 className="ms-3"> Characters </h4>
    <div className="overflow-auto d-flex"> 
    {/* //Que es overflow-auto? */}
      <CardCharacter />
    </div>
    
    <h4 className="ms-3"> Planets </h4>
    <div className="overflow-auto d-flex">
      <CardPlanets />
    </div>
    </div>
  </>
);
