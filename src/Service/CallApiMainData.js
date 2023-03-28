
import axios from 'axios';

const baseUrl = 'http://localhost:3000';
export const getDataActivity = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}/activity`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
