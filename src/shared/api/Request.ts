import axios, {AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig} from "axios";
import md5 from 'md5';
import {Cookie} from "shared/lib/Cookie";
import {v4 as uuidv4} from 'uuid';


let instanceConfig: AxiosRequestConfig = {
    baseURL: process.env.BASE_URL,
    transformResponse: (res: string) => {
        if (!res) return res;
        let data = JSON.parse(res);
        if (data.data) return data.data;
        return data;
    }
};

let instanceZendeskConfig: AxiosRequestConfig = {
    baseURL: process.env.ZENDESK_URL,
};

let request: AxiosInstance = axios.create(instanceConfig);
let requestAuth: AxiosInstance = axios.create(instanceConfig);
let requestZendesk: AxiosInstance = axios.create(instanceZendeskConfig);

function authInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    let token: string = Cookie.get('token') ?? '';
    config.headers.authorization = `Bearer ${token}`;
    return config;
}

function authZendeskInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    config.headers.authorization = `Bearer ${process.env.ZENDESK_TOKEN}`;
    return config;
}

function securityInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const secretAppKey = process.env.SECRET_APP_KEY;
    let uuid: string = uuidv4();
    config.headers['x-request-uuid'] = uuid;
    config.headers['x-signature'] = md5(uuid + secretAppKey);
    return config;
}

async function errorHandler(error: any) {
    const originalRequest = error.config;
    let {status, data} = error.response;
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
