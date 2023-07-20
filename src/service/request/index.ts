import axios from "axios"
import type { AxiosInstance } from "axios"
import type { qbRequsetConfig } from "./type"

class QbRequset {
    instance: AxiosInstance
    // request 实例 => axios的实例
    constructor(config: qbRequsetConfig) {
        this.instance = axios.create(config)

    // 全局拦截器 请求拦截和响应拦截
        this.instance.interceptors.request.use(config => {
            console.log("全局请求成功拦截")
            return config
        }, err => {
            console.log("全局请求失败拦截")
            return err
        })

        this.instance.interceptors.response.use(res => {
            console.log("全局响应成功拦截")
            return res
        }, err => {
            console.log("全局响应失败拦截")
            return err
        })

        //限制范围的拦截器
        if(config.interceptors) {
            this.instance.interceptors.request.use(
                config.interceptors.requestSuccessFn,
                config.interceptors.requestFailureFn
            )
            this.instance.interceptors.response.use(
                config.interceptors.responseSuccessFn,
                config.interceptors.responseFailureFn
            )
        }
    }

    // 添加网络请求的方法
    request(config: qbRequsetConfig) {
        return this.instance.request(config)

}
    get(config: qbRequsetConfig) {
        return this.request({ ...config, method: "GET" })
    }
    post(config: qbRequsetConfig) {
        return this.request({ ...config, method: "POST"})
    }

}

export default QbRequset
