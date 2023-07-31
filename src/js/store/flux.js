// gerState ES UN FUNCION QUE RETORNA UN OBJETO
const getState = ({
    getStore, // PARA INFO DE LA Store EN EL Contexto DE Flux
    getActions, // PARA INFO DE LA Store EN EL Contexto DE Flux
    setStore // CAMBIAR EL VALOR DE ALGUN DATO QUE TENGA EN LA Store
}) => {
    return {
        //STORE ES UN objeto -> DEPOSITO DE "estados" 
        store: {
            // SE DEFINE UN STORE CON UN ARREGLO []
            favorites: [],
            characters: [],
            planets: [],
            datailsCharacter: {},
            planet: {},
        },
        //ACCION ES UNA objeto-> DEPOSITO DE funciones -> PROVOCA UN CAMBIO EN EL STORE -> SE VE EN TODA MI APLICACION
        actions: {
            getCharacters: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({ characters: data.results }))
                    .catch(err => console.error(err))
            },
            getCharacter: (uid) => {
                
                fetch("https://www.swapi.tech/api/people/" + uid)
                    .then(res => res.json())
                    .then(data => setStore({ detailsCharacter: data.results }))
                    .catch(err => console.error(err))
            },
            getPlanets: () => {
                fetch("https://www.swapi.tech/api/planets")
                    .then(res => res.json())
                    .then(data => setStore({
                        planets: data.results
                    }))
                    .catch(err => console.error(err))
            },

            getPlanet: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detailsPlanets: data.results
                    }))
                    .catch(err => console.error(err))
            },

            addFav: (item) => {
                const store = getStore();
                const newFav = store.favorites.concat(item);
                setStore({ favorites: newFav });
            },

            deleteFav: (item) => {
                const store = getStore();
                let newFav = store.favorites.filter((favorChar) => {
                    if (item !== favorChar) {
                        return favorChar;
                    }
                })
                setStore({ favorites: newFav })

                //EXAMPLES
                // Use getActions to call a function within a fuction
                exampleFunction: () => {
                    getActions().changeColor(0, "green");
                },

                    loadSomeData; () => {
                        /**
                                    fetch().then().then(data => setStore({ "foo": data.bar }))
                                */
                    },
                        changeColor; (index, color) => {
                            //get the store
                            const store = getStore();

                            //we have to loop the entire demo array to look for the respective index
                            //and change its color
                            const demo = store.demo.map((elm, i) => {
                                if (i === index) elm.background = color;
                                return elm;
                            });

                            //reset the global store
                            setStore({
                                demo: demo,
                            });

                        }
            }
        }
    }
}
export default getState;