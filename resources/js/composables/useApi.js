import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${window.location.protocol}//${window.location.host}/api}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default function useApi() {
    const $get = (url, params = {}) => {
        return axiosInstance.get(url, params);
    };

    return {
        $get,
    }; 
}