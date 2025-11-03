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

export async function obtenerPjPorPagina(page = 1) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        if (!response.ok) throw new Error("Error al obtener los personajes");
            const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en obtenerTodosLosPjPorPagina:", error);
    return { results: [] }; // Para evitar que rompa si hay error
    }
};
