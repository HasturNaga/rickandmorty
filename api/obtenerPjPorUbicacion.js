import axios from "axios";

export const obtenerPjPorUbicacion = async (url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data.residents;
    } catch (error) {
        console.error("Error al obtener las ubicaciones:", error);
        return [];
    }
};