import axios, { AxiosError, AxiosResponse } from 'axios'
import { ResultData } from './types'
import { ElMessage } from 'element-plus'
import { isNil } from '@renderer/shared/verify'

const { VITE_BASE_URL } = import.meta.env

const defaultResult = {
  code: 200,
  data: null,
  msg: '请求成功'
}

const errorToResult = (err: any) => {
  const { code, message } = err
  return {
    status: code.toString(),
    desc: message
  }
}

/** 异常捕获 */
const errorCapture = (err: AxiosError) => {
  return new Promise<ResultData>((resolve, reject) => {
    // Shallow copy
    const errResult = Object.assign({}, defaultResult, {
      code: 400,
      msg: '请求失败'
    })

    const errMessage = err?.message

    if (errMessage) {
      const { status, statusText, data }: any = err.response ?? {}

      if (data) {
        errResult.msg = data.msg
      } else if (statusText) {
        if (statusText.startsWith('Internal Server Error')) {
          errResult.msg = '内部服务器错误，请稍后请求'
        } else {
          errResult.msg = statusText
        }
      } else {
        if (errMessage.startsWith('Network Error')) {
          errResult.msg = '网络异常，请检查网络'
        } else if (errMessage.startsWith('timeout of 10000ms exceeded')) {
          errResult.msg = '请求超时，请检查网络或重新请求'
        } else {
          errResult.msg = errMessage
        }
      }

      if (!isNil(status)) {
        errResult.code = status
      }

      return resolve(errResult)
    }
    errResult.msg = err.toString()
    reject(errResult)
  })
}

function handleCode(code: number): void {
  switch (code) {
    case 401:
      ElMessage.error('登录失败，请重新登录')
      break
    default:
      ElMessage.error('请求失败')
      break
  }
}

const instance = axios.create({
  baseURL: VITE_BASE_URL,
  /** 请求超时 默认：30s */
  timeout: 1000 * 30
  // withCredentials: true
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) =>
    errorCapture(error).then((err) => {
      ElMessage.warning(err.msg)
      return Promise.reject(errorToResult(err))
    })
)

/** 响应拦截 */
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response // 解构
    if (data.code === 401) {
      // 登录信息失效，应跳转到登录页面，并清空本地的token
      // localStorage.setItem('token', '')
      // router.replace({
      //   path: '/login'
      // })
      return Promise.reject(data)
    }
    // 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
    if (data.code && data.code !== 200) {
      ElMessage.error(data.msg) // 此处也可以使用组件提示报错信息
      return Promise.reject(data)
    }
    return data
  },
  (error: AxiosError) => {
    const { response } = error
    if (response) {
      handleCode(response.status)
    }
    if (!window.navigator.onLine) {
      ElMessage.error('网络连接失败')
      // 可以跳转到错误页面，也可以不做操作
      // return router.replace({
      //   path: '/404'
      // });
    }
  }
)

class CreateAxios {
  get<T>(url: string, params?: object): Promise<ResultData<T>> {
    return instance.get(url, { params })
  }

  post<T>(url: string, data?: any): Promise<ResultData<T>> {
    return instance.get(url, data)
  }

  put<T>(url: string, data?: any): Promise<ResultData<T>> {
    return instance.put(url, data)
  }
  delete<T>(url: string, params?: object): Promise<ResultData<T>> {
    return instance.delete(url, { params })
  }
}

const request = new CreateAxios()

export default request
