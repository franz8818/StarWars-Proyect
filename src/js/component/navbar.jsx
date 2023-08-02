import React, {useContext} from "react"; //1. Importar el hooks useContext de React 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; //2. Traer el Context

export const Navbar = () => {
  //Desestructurar Los dos conceptos de flux
  const {store, actions}=useContext(Context) //3. Llamar el context(Consumir el Contexto
  
  return (
  <>
    <nav className="navbar bg-dark">
      <Link to="/">
      <div className="ms-5"> 
      <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png" height="38" />
      </div>
      </Link>
      <div className="ml-auto"> 
      <div className="dropdown">
  <button className="favorites me-5 btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu dropdown-menu-end bg-dark">
					{store.favorites.map((item , index) =>{ 
					return(
						<li className="dropdown-item bg-dark text-light d-flex" key={index}> <h6 className="lista-fav float-start w-100">{item}</h6>
							<button className="btn text-light bg-secondary float-end mb-3" onClick={()=>actions.deleteFav(item)}>X</button>	
						</li>
            	)
            }
            )}
          </ul>
    </div>
  </div>
</nav>
  </>
  );
};