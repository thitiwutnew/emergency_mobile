import api from '../utils/api'

const auth = {
  facebookAuth: data => {
    return api.post(`v1/auth/facebook`, data)
  },
  userAuth: data => {
    return api.post(`v1/auth/login`, data)
  }
}

export default auth