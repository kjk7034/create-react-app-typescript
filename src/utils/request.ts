import axios from 'axios'

export default function request(
  url: any,
  method = 'get',
  data?: any,
  config?: any
) {
  return axios({
    method,
    url,
    data,
    ...config
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))
}
