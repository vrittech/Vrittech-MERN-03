import axios from 'axios';
import { errorToast } from './toastify.service';
import { useSelector } from 'react-redux';

const serverURL = import.meta.env.VITE_SERVER_URL;

const { jwt } = useSelector((state: any) => state.auth)

export const postData = async (url: string, data: any) => {
    try {
        const response = await axios.post(`${serverURL}/${url}`, data);
        return response.data;
    } catch (error: any) {
        errorToast(error.response.data.message)
    }
}

export const postDataWithJWT = async (url: string, data: any) => {
    try {
        const response = await axios.post(`${serverURL}/${url}`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        return response.data;
    } catch (error: any) {
        errorToast(error.response.data.message)
    }
}