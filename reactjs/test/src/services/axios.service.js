import axios from "axios";

const BACKEND_URL = "https://dummyjson.com/"

export const getData = async (url) => {
   const response = await axios.get(BACKEND_URL + url);
   return response;
}

export const postData = async (url, body) => {
   const response = await axios.post(BACKEND_URL + url, body);
   return response;
}