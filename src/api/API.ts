import axios from "axios";

const URL = 'http://192.168.0.107:8000';

export function getAndThen<T>(type: string, params: any, thenFunction: Function) {
    get<T>(type, params)
        .then(response => {
            thenFunction(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the events!', error);
        });
}

export function get<T>(type: string, params: any,) {
    return axios.get<T>(URL + type, {params});
}


