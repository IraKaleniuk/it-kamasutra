import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
// const LOG_IN = 'LOG-IN'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return (
                {
                    ...state,
                    userId: action.payload.userId,
                    email: action.payload.email,
                    login: action.payload.login,
                    isAuth: action.payload.isAuth,
                    isFetching: true
                }
            )
        }
        case TOGGLE_IS_FETCHING : {
            return ({
                ...state, isFetching: action.isFetching
            })
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
// export const setLoginId = (userId) => ({type: LOG_IN, userId})

export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.me().then(response => {
            dispatch(toggleIsFetching(false))
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

    export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.login(email, password, rememberMe).then(response => {
            dispatch(toggleIsFetching(false))
            if (response.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
    }
}
    export const logout = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.logout().then(response => {
            dispatch(toggleIsFetching(false))
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}


export default authReducer;