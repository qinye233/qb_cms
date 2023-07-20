import type { AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig} from "axios"

// 针对AxiosRequestConfig配置进行扩展
interface qbInterceptors {
    requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig, //此处有bug
    requestFailureFn?: (err: any) => any,
    responseSuccessFn?: (res: AxiosResponse) => AxiosResponse,
    responseFailureFn?: (err: any) => any
}

export interface qbRequsetConfig extends AxiosRequestConfig {
    interceptors?: qbInterceptors
}