import axios from "axios";

const URL = 'http://192.168.0.107:8000';


function get(type : string, params: any, thenFunction: Function) {
    axios.get(URL + type, {params})
        .then(response => {
            thenFunction(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the events!', error);
        });
}


export default get;
