import axios from 'axios';


const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = 'aed23334'; // Пожалуйста, не используйте мой ключ.
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?s=${title}&apikey=${key}`).then(respons => {
            console.log(respons)
            const dataSearchByName = JSON.stringify(respons.data);
            return dataSearchByName
        })
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`?s=${title}&type=${type}&apikey=${key}`).then(respons => {
            const dataSearchByType = JSON.stringify(respons.data);
            return dataSearchByType
        })
    }
};


export default API;
