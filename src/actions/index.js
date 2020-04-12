import { FETCHING_DATA,FETCHING_DATA_FAILURE,FETCHING_DATA_SUCCESS } from '../constants'
import loaddata from './apiuser'

export const setStageToSuccess = (datauser) => ({
  type: FETCHING_DATA_SUCCESS,
  payload: datauser
})
export const setStageToFetching = (datauser) => ({
    type: FETCHING_DATA,
})
export const setStageToFailure = (datauser) => ({
    type: FETCHING_DATA_FAILURE,
})


export const fetchUser =() =>{
    return (dispatch)=>{
        dispatch(setStageToFetching());
        loaddata()
        .then(result=>{
            dispatch(setStageToSuccess(result))
        })
        .catch(error =>{
            dispatch(setStageToFailure())
        })
    }
}