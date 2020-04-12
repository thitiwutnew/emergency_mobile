import axios from 'axios'

const createApiInstance = () => {
  return ( 
    axios.create({
      baseURL: "https://emergency-development.herokuapp.com",
      headers: {
        Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWRtaW4iLCJpYXQiOjE1ODUzMjQ5ODgsImV4cCI6MTYxNjQyODk4OH0.3T-TSSya-UnncSsNAh-cOGrhRLeGWgpTy9_3YStbx9Y`
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