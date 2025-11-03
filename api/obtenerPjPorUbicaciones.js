import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api/location';

export const obtenerUbicaciones = async (ubicacion) => {

    try {
        const response = await axios.get(`${baseURL}/${ubicacion}`);
        const data = response.data;
        return data.residents;
    } catch (error) {
        console.error("Error al obtener las ubicaciones:", error);
        return [];
    }
};