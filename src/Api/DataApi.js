import axios from "axios";

const userId = 12;

async function DataApi() {
    const baseUrl = `http://localhost:3000/user/${userId}`
    try {
        const response = await axios.get(baseUrl);
        const myData = [response.data];
        return myData;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default DataApi;
