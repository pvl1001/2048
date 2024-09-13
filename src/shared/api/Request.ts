import axios, {AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig} from "axios";
import md5 from 'md5';
import {Cookie} from "shared/lib/Cookie";
import {v4 as uuidv4} from 'uuid';


const instanceConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BASEPATH,
    transformResponse: (res: string) => {
        if (!res) return res;
        const data = JSON.parse(res);
        if (data.data) return data.data;
        return data;
    }
};

const instanceZendeskConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.ZENDESK_URL,
};

const request: AxiosInstance = axios.create(instanceConfig);
const requestAuth: AxiosInstance = axios.create(instanceConfig);
const requestZendesk: AxiosInstance = axios.create(instanceZendeskConfig);

function authInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const token: string = Cookie.get('token') ?? '';
    config.headers.authorization = `Bearer ${token}`;
    return config;
}

function authZendeskInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    config.headers.authorization = `Bearer ${import.meta.env.ZENDESK_TOKEN}`;
    return config;
}

function securityInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const secretAppKey = import.meta.env.SECRET_APP_KEY;
    const uuid: string = uuidv4();
    config.headers['x-request-uuid'] = uuid;
    config.headers['x-signature'] = md5(uuid + secretAppKey);
    return config;
}

async function errorHandler(error: any) {
    const originalRequest = error.config;
    const {status, data} = error.response;
    if (status === 500 && data.error.includes('JWT expired') && !originalRequest._retry) {
        originalRequest._retry = true;
        const access_token: string = Cookie.get('refreshToken') ?? '';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        return requestAuth(originalRequest);
    }
    return Promise.reject(error);
}

request.interceptors.request.use(securityInterceptor);
requestAuth.interceptors.request.use(securityInterceptor);
requestAuth.interceptors.request.use(authInterceptor);
requestZendesk.interceptors.request.use(authZendeskInterceptor);
requestAuth.interceptors.response.use(res => res, errorHandler);

export {
    request,
    requestAuth,
    requestZendesk,
};
