import QbRequset from './request'
import { ElMessage } from 'element-plus'
import { TIME_OUT, BASE_URL } from './config'
import { LOGIN_TOKEN } from '@/constants'

const qbRequset = new QbRequset({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      const token = localStorage.getItem(LOGIN_TOKEN)
      if (config.headers && token) {
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    },
    requestFailureFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      if (res.data.id) {
        ElMessage({
          type: 'success',
          message: '恭喜！登录成功'
        })
      }
      return res
    },
    responseFailureFn: (err) => {
      if (!err.response) {
        ElMessage({
          type: 'warning',
          message: '服务器未启动，暂时无法登录'
        })
      }
      ElMessage({
        type: 'error',
        message: err.response.data
      })
      return err
    }
  }
})

export default qbRequset
