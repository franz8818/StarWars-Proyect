import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import "../../styles/others.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DetailsCharacters = () => {
  const {store, actions} = useContext(Context)
  const [character, setCharacter] = useState({})
  const params = useParams()
  useEffect(() => {
    setCharacter(actions.getCharacter(params.id))
  })
    return (
      <>
      <div className="container">
    <div className="info2 card mb-3">
  <div className="row g-2">
    <div className="img-info col-md-4">
      <img src={"https://starwars-visualguide.com/assets/img/characters/"+params.id+".jpg"} className="img-fluid rounded-start" alt="..." />
     </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title"><b>Name</b></h2>
        <h4 className="card-text"><small className="text-muted">features</small></h4>
        <h5><ul>
                <li>gender : {character?.gender} </li>
                <li>birth year : 19 BBY </li>
                <li>height : 172cm </li>
                <li>mass: "77"</li>
                <li>skin_color": "Fair"</li>
                <li>eye_color : Blue </li>
                <li>hair_color : Blond </li>
            </ul></h5>
      </div>
    </div>
  </div>
 </div>
 </div>
    </> 
    );
  };
  
  export default DetailsCharacters;