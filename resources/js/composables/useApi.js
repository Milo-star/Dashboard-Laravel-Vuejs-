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
        return axiosInstance.get(url, params).then(response => {
            return response.data;
        });
    };

    const $post = (url, params = {}) => {
        return axiosInstance.post(url, params).then(response => {
            return response.data;
        });
    };

    const $put = (url, params = {}) => {
        return axiosInstance.put(url, params).then(response => {
            return response.data;
        });
    };

    const $delete = (url, params = {}) => {
        return axiosInstance.delete(url, params).then(response => {
            return response.data;
        });
    };

    return {
        $get,
        $post,
        $put,
        $delete,
    }; 
}