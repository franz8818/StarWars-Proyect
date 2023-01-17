// gerState ES UN FUNCION QUE RETORNA UN OBJETO
const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        //STORE ES UN objeto -> DEPOSITO DE estados 
        store: {
            // SE DEFINE UN STORE CON UN ARREGLO []
            favorites: [],
            characterList: [],
            planetList: [],
        },
        //ACCION ES UNA objeto-> DEPOSITO DE funciones -> PROVOCA UN CAMBIO EN EL STORE -> SE VE EN TODA MI APLICACION
        actions: {









            //LO VI EN UN VIDEO DE 4 GEEKS HACE UN AÑO, USARON TECH... ¿POR QUE?
            fetchCharacter: async () => {
                URL = "https://www.swapi.tech/api/people/";
            },








            //PREGUNTAR QUE ES TODO ESTE CHORRERO
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