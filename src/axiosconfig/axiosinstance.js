import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  params:{
  api_key:"203c09d3f7c597d463bdfa5862cfd1db"
  }
});
export default axiosInstance;
