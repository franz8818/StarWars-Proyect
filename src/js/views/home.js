import React, {useState, useEffect, useContext} from "react";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Home = () => (
    const {store, actions} = useContext(Context)

    <>
    <div className="container">
      
      <h5 className="titulo ms-3"> Characters </h5>
        <CardCharacter />

      <h5 className="ms-3 mt-3"> Planets </h5>
        <CardPlanets />

    </div>
    
    </>

);

