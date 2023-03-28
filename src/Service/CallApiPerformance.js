
import axios from 'axios';
const baseUrl = 'http://localhost:3000';
export const getDataPerformance= async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}/performance`);
        return response.data.data;
    } catch (error) {
        console.error(error,"erreur a l'appel d'api");
        return null;
    }
};
