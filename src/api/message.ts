import request from './../utils/request'

export function getMessage(idx?: number) {
  if (idx) {
    return request(`https://jsonplaceholder.typicode.com/posts/${idx}`)
  }
  return request(`https://jsonplaceholder.typicode.com/posts`)
}
