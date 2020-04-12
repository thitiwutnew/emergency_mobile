import api from '../utils/api'

const User = {
  createUserProfile: data => {
    return api.post(`service/management/profile`, data)
  }
}

export default User