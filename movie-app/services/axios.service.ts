import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/v1/'

export const postData = async (url: any, data: any) => {
    const resp = await axios.post(BASE_URL + url, data);
    return resp;
}