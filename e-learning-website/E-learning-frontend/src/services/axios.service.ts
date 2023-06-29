import axios from 'axios';

const serverURL = import.meta.env.VITE_SERVER_URL;

export const postData = async (url: string, data: any) => {
    try {
        const response = await axios.post(`${serverURL}${url}`, data);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}