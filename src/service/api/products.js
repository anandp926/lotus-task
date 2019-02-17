import axios from '../axios/axios';

export const getAllProducts = (callback) => {
    axios.get('/lotus/products').then((res) => {
        callback(res)
    }).catch((err) => callback(err))
};