import api from '../utils/api'

const User = {
  updateprofile: (data, id) => {
    return api.put(`v1/users/profile/${id}`, data)
  },
  registeraccount: (data) => {
    return api.post(`v1/users/`, data)
  }
}

export default User