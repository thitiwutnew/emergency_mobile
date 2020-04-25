import api from '../utils/api'

const User = {
  updateprofile: (data, id) => {
    return api.put(`v1/users/profile/${id}`, data)
  }
}

export default User