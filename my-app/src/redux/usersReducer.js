const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


let initialState = {
    users: [{
        id: 1,
        photoUrl: 'https://i1.sndcdn.com/avatars-3ZCCUZugLlCvBtcQ-KrUSBA-t500x500.jpg',
        followed: false,
        fullName: 'Ira',
        status: 'I am a boss',
        location: {city: 'Mlyniv', country: 'Ukraine'}
    },
        {
            id: 2,
            photoUrl: 'https://i1.sndcdn.com/avatars-3ZCCUZugLlCvBtcQ-KrUSBA-t500x500.jpg',
            followed: true,
            fullName: 'Natali',
            status: 'I am a boss too',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
        {
            id: 3,
            photoUrl: 'https://i1.sndcdn.com/avatars-3ZCCUZugLlCvBtcQ-KrUSBA-t500x500.jpg',
            followed: false,
            fullName: 'Kate',
            status: 'I am a boss too',
            location: {city: 'Minsk', country: 'Belarus'}
        }]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return ({
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            })
        case UNFOLLOW :
            return ({
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            })
        case SET_USERS : {
            return ({
                ...state, users: [...state.users, ...action.users]
            })
        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer