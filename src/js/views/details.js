import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import DetailsCharacters from "../component/detailsCharacters.jsx";

const Details = () => {
    return <>
    <detailsCharacters />
    </>
  }
  
  export default Details
