import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import InfoCharacters from "../component/infoCharacters.jsx";
import InfoPlanets from "../component/infoPlanets.jsx";

const Details = () => {
  const detailsType = useParams ()
  return (
    <>
    {detailsType.type == "character" ?
    <InfoCharacters />
    :
    <InfoPlanets />
  }
    </>
  );
};

export default Details;
