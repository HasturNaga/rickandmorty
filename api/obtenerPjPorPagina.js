import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api/character';

export const obtenerPjPorPagina = async (page) => {
    try {
        const response = await axios.get(`${baseURL}?page=${page}`);
        const data = response.data;
        return data.results;
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        return [];
    }
};