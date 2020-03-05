import axios from 'axios'

axios.defaults.withCredentials = true

const http = axios.create({
  headers: {
    customHeader: 'testHeader'
  },
  // FIXME: 全体タイムアウト値を入れる
  timeoutSeconds: 5
})

http.interceptors.request.use(
  (config) => {
    config.headers['test-token'] = 'token'
    return config
  },
  (error) => Promise.reject(error)
)

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 404) {
      // alert('404 error')
    }
    return error
  }
)
export default http
