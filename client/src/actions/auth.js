import {AUTH} from '../constants/actionTypes'
import * as api from '../api/index'

export const signin = (formData, history) => async (dispatch) => {
    try {
        
        const {data} = await api.signin(formData, history)
        
        data.result.password = formData.password
        dispatch({type: AUTH, data})
        history.push('/')
    } catch (error) {
        
        
        history.push('/auth')
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData, history)
        
        data.result.password = formData.password
        dispatch({type: AUTH, data})

        history.push('/')
    } catch (error) {

        
        history.push('/auth')
    }
}