import axios from 'axios';
import { errorToast } from './toastify.service';

const serverURL = import.meta.env.VITE_SERVER_URL;

export const postData = async (url: string, data: any) => {
    try {
        const response = await axios.post(`${serverURL}/${url}`, data);
        return response.data;
    } catch (error: any) {
        errorToast(error.response.data.message)
    }
}