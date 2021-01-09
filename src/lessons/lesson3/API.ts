import axios from 'axios';


const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = 'aed23334'; // Пожалуйста, не используйте мой ключ.
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?t=${title}&apikey=${key}`).then(respons => {
            const data = JSON.stringify(respons.data);
            return data
        })
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
