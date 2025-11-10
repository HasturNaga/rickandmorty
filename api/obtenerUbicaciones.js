import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api/location';

export const obtenerUbicaciones = async () => {
    try {
        const response = await axios.get(`${baseURL}`);
        const data = response.data;
        return data.results;
    } catch (error) {
        console.error("Error al obtener las ubicaciones:", error);
        return [];
    }
};