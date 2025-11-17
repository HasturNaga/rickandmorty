import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api/character';

export const obtenerTodosLosPj = async () => {
    
    try {
        const response = await axios.get(`${baseURL}`);
        const data = response.data;
        return data.info;
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        return [];
    }
};