import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-headline-creator.onrender.com",
  withCredentials: true,
});