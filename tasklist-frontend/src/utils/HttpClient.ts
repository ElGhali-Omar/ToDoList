import axios, {AxiosInstance} from "axios";


const BASE_URL = "http://localhost:3000/"
const axiosConfig = {
    baseURL: BASE_URL,
    timeout: 20000,
    withCredentials: false,

}
export const httpClient: AxiosInstance = axios.create(axiosConfig);

