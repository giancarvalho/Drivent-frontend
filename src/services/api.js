import axios from "axios";

const instance = axios.create({
  //  baseURL: process.env.REACT_APP_API_BASE_URL
  baseURL: "http://localhost:4000"
});

export default instance;
