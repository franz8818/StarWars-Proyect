import React, { useContext } from "react";
import { Context } from "../store/appContext";
import cardCharacter from "./cardCharacter.jsx";

const character = () => {
    const { store, actions } = useContext(Context); 
  
    return (
      <>
          <div className="card-body">
            {store.characters.map((item, i) => (<cardCharacter key={i}  item={item} />))}
           </div>
      </>
    );
  };
  
  export default character;
  