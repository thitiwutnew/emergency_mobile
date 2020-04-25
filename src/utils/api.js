import axios from 'axios'
import { AsyncStorage } from 'react-native';

let accessToken = null
AsyncStorage.getItem('accessToken', (err, result) => {
  accessToken = result
});
const createApiInstance = () => {
  return ( 
    axios.create({
      baseURL: "https://emergency-mobile-development.herokuapp.com",
      headers: {
        Authorization: `bearer ${accessToken}`
      }
    })
  )
}

const handleResponse = response => {
  return Promise.resolve(response)
}

const catchError = e => Promise.resolve(e.response)

export default {

  get: (path, params) => 
    createApiInstance().request({
      url: path,
      method: 'GET',
      params
    })
    .then(handleResponse)
    .catch(catchError),
  post: (path, body = {}, headers = {}) => 
    createApiInstance().request({
      url: path,
      method: 'POST',
      headers,
      data: body
    })
    .then(handleResponse)
    .catch(catchError),
  put: (path, body = {}) =>
    createApiInstance()
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError),
  delete: path =>
    createApiInstance()
      .delete(path)
      .then(handleResponse)
      .catch(catchError)
}