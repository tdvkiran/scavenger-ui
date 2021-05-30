import axios from 'axios';


const instance = axios.create({
    baseURL: "https://scavenger-backend11.herokuapp.com"
});

export default instance;