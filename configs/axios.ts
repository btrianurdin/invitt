import Axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;

const instance = Axios.create({
  baseURL: `${API_URL}`,
});

export default instance;
