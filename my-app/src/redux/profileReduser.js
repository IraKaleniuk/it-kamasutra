import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post!", likesCount: 10},
        {id: 3, message: "It's my first post!", likesCount: 10},
        {id: 4, message: "It's my first post!", likesCount: 10},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: 'some text',
    isFetching: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.text,
                likesCount: 0
            }
            return (
                {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            )
        }
        case UPDATE_NEW_POST_TEXT: {
            return (
                {
                    ...state,
                    newPostText: action.newText
                }
            )
        }
        case SET_USER_PROFILE: {
            return (
                {
                    ...state,
                    profile: action.profile
                }
            )
        }
        case SET_STATUS: {
            return (
                {
                    ...state,
                    status: action.status
                }
            )
        }
        case TOGGLE_IS_FETCHING: {
            return (
                {
                    ...state,
                    isFetching: action.isFetching
                }
            )
        }
        default:
            return state;
    }
}

export const addPostCreator = (text) => ({type: ADD_POST, text})
export const updateNewPostTextCreator = (text) => {
    return (
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
            dispatch(toggleIsFetching(false))
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;