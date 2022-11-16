import axios from 'axios';

axios.defaults.baseURL = 'https://icanhazdadjoke.com/';
axios.defaults.headers.common = {
  Accept: 'application/json'
};
