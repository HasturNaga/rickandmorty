import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/character";

// 🔹 Si querés buscar por nombre:
export const obtenerPjPorNombre = async (nombre) => {
    try {
    // Ejemplo: https://rickandmortyapi.com/api/character/?name=Rick
        const response = await axios.get(`${baseURL}/?name=${encodeURIComponent(nombre)}`);
        const data = response.data;

    // Si hay resultados, devuelve el primero
        if (data.results && data.results.length > 0) {
            return data.results[0];
        }

    // Si no encuentra nada, devuelve null
        return null;
    } catch (error) {
        console.error("Error al obtener el personaje:", error);
        return null;
    }
};
