
import axios from 'axios';

const baseUrl = 'http://localhost:3000';
export const getDataSessions = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}/average-sessions`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
