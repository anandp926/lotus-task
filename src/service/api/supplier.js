import axios from '../axios/axios';

export const getAllSuppliers = (callback) => {
    axios.get('/lotus/suppliers').then((res) => {
        callback(res)
    }).catch((err) => callback(err))
};