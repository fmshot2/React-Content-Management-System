import axios from "axios";

export const apiSource = process.env.REACT_APP_API_SOURCE === 'laravel' ?  "http://127.0.0.1:8000/api/" :  "http://127.0.0.1:5000/api/v1";

export default axios.create({
  // baseURL: "http://ahi-app.herokuapp.com/api",
  baseURL: apiSource,
  headers: {
    "Content-type": "application/json"
  }
});