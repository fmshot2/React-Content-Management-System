import axios from "axios";

export default axios.create({
  baseURL: "http://ahi-app.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});