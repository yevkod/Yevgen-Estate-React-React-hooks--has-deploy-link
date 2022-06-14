import axios from "axios";
import React from "react";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchapi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '658644114amsh234cafc14a1fa8fp1553fcjsnc1b691a935c7' ,
        },
    });

    return data;
}