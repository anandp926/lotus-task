import axios from '../axios/axios';

export const getAllCustomer = (callback) => {
    axios.get('/lotus/customers').then((res) => {
        callback(res)
    }).catch((err) => callback(err))
};

export const createNewCustomer = (callback, data) => {
    axios.post('/lotus/customers', data).then((res) => {
        callback(res)
    }).catch((err) => callback(err))
};