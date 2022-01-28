const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

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
                    userId: action.data.userId,
                    email: action.data.email,
                    login: action.data.login,
                    isAuth: true,
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

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default authReducer;