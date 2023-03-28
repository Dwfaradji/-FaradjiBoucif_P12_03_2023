import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
