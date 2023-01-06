const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      // Use getActions to call a function within a fuction
      //https://starwars-visualguide.com/assets/img/characters/1.jpg
      getList: async (element, page = 1, limit = 12) => {
        try {
          let response = await fetch(
            `https://www.swapi.tech/api/${element}?page=${page}&limit=${limit}`
          );
          if (!response.ok) {
            console.error(`Error en la petición: ${response.statusText}`);
            return null;
          } else {
            let data = await response.json();
            let newStore = {};
            newStore[element] = data.result || data.results;
            //Agregar imagenes a la data en base al tipo de elemento y el id
            newStore[element] = newStore[element].map((item) => {
              item.img = `https://starwars-visualguide.com/assets/img/${
                element == "people" ? "characters" : element
              }/${item.uid}.jpg`;
              return item;
            });
            setStore(newStore);
            return { pages: data.total_pages };
          }
        } 
          catch (error) {
          console.error(`Error en la peticion: ${error}`);
          return null;
        }
      },

      /* Elements */
      getDetail: async (element, id) => {
        try {
          let response = await fetch(
            `https://www.swapi.tech/api/${element}/${id}`
          );
          if (!response.ok) {
            console.error(`Error en la petición: ${response.statusText}`);
            return null;
          } else {
            let data = await response.json();
            // let newStore = {};
            // newStore[element + "detail"] = data.result || data.results;
            // setStore(newStore);
            return data.result || data.results;
          }
        } catch (error) {
          console.error(`Error en la peticion: ${error}`);
          return null;
        }
      },
    },
  };
};

export default getState;
