import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://sitefood-com-br.umbler.net',
})