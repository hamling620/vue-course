import axios from 'axios'
import { baseURL } from '../config'
import { getToken } from '@/lib/utils'

export default class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {}
    }
    return config
  }

  interceptors (instance) {
    instance.interceptors.request.use(config => {
      config.headers['Authorization'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      return res.data
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}
