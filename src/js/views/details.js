import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import DetailsCharacters from "../component/detailsCharacters.jsx";
import DetailsPlanets from "../component/detailsPlanets.jsx";

const Details = () => {
  const detailsType = useParams ()
  return (
    <>
    {detailsType.type == "character" ?
    <DetailsCharacters />
    :
    <DetailsPlanets />
  }
    </>
  );
};

export default Details;
