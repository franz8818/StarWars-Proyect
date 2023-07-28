// gerState ES UN FUNCION QUE RETORNA UN OBJETO
const getState = ({
    getStore, // PARA INFO DE LA Store EN EL Contecto DE Flux
    getActions, // PARA INFO DE LA Store EN EL Contecto DE Flux
    setStore // CAMBIAR EL VALOR DE ALGUN DATO QUE TENGA EN LA Store
}) => {
    return {
        //STORE ES UN objeto -> DEPOSITO DE estados 
        store: {
            // SE DEFINE UN STORE CON UN ARREGLO []
            favorites: [],
            characters: [],
            planets: [],
            character: {},
            planet: {},
        },
        //ACCION ES UNA objeto-> DEPOSITO DE funciones -> PROVOCA UN CAMBIO EN EL STORE -> SE VE EN TODA MI APLICACION
        actions: {
            getCharacters: () => {
                fetch("https://www.swapi.tech/api/people")
                    .then(res => res.json())
                    .then(data => setStore({
                        characters: data.results
                    }))
                    .catch(err => console.error(err))
            },
            getCharacter: (id) => {
                console.log(id)
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detailsCharacter: data.results
                    }))
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

            //EJEMPLOS
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            loadSomeData: () => {
                /**
                        	fetch().then().then(data => setStore({ "foo": data.bar }))
                        */
            },
            changeColor: (index, color) => {
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
            },
        },
    };
};

export default getState;