import React from "react";
import "../../styles/home.css";
import "../../styles/others.css";

const DetailsCharacters = () => {
  
    return (
      <>
      <div className="container">
    <div className="info2 card mb-3">
  <div className="row g-2">
    <div className="img-info col-md-4">
      <img src="https://media.vandalsports.com/i/1080x1080/11-2020/202011910389_1.jpg" className="img-fluid rounded-start" alt="..." />
     </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title"><b>Name</b></h2>
        <h4 className="card-text"><small className="text-muted">features</small></h4>
        <h5><ul>
                <li>gender : Male</li>
                <li>birth year : 19 BBY </li>
                <li>height : 172cm </li>
                <li>mass": "77"</li>
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