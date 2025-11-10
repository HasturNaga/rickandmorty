import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/character";

export const obtenerPjPorNombre = async (id) => {

    try {
        const response = await axios.get(`${baseURL}`);
        const data = response.data;
        const resultado = data.results;
        const resultadoByName = resultado.filter(el => el.name == id)
        return resultadoByName    

    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        return []; 
    }
};
