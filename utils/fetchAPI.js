import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '658644114amsh234cafc14a1fa8fp1553fcjsnc1b691a935c7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        },
    });

    return data;
}