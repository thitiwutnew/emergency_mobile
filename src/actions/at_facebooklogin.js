import user from '../model/user'

export const setUsername = data => {
    user.createUserProfile(data)
    return {
        type: 'SET_USERNAME',
        payload: data
    }
}


