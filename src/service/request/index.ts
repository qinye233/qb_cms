import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { qbRequsetConfig } from './type'

class QbRequset {
  instance: AxiosInstance
  // request 实例 => axios的实例
  constructor(config: qbRequsetConfig) {
    this.instance = axios.create(config)

    //限制范围的拦截器
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccessFn,
        config.interceptors.requestFailureFn
      )
      this.instance.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailureFn
      )
    }

    // 全局拦截器 请求拦截和响应拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }

  // 添加网络请求的方法
  request(config: qbRequsetConfig) {
    return this.instance.request(config)
  }
  get(config: qbRequsetConfig) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config: qbRequsetConfig) {
    return this.request({ ...config, method: 'POST' })
  }
  patch(config: qbRequsetConfig) {
    return this.request({ ...config, method: 'PATCH' })
}
  delete(config: qbRequsetConfig) {
    return this.request({ ...config, method: 'DELETE' })
}
}

export default QbRequset
