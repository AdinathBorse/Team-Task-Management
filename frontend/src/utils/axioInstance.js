import axios from "axios"

const BASE_URL = "https://team-task-management-jch1.onrender.com"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken")

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default axiosInstance
