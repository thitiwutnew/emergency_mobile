import api from '../utils/api'

const auth = {
  facebookAuth: data => {
    return api.post(`v1/auth/facebook`, data)
  }
}

export default auth