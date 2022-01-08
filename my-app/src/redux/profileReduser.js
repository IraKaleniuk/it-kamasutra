const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post!", likesCount: 10},
        {id: 3, message: "It's my first post!", likesCount: 10},
        {id: 4, message: "It's my first post!", likesCount: 10},
    ],
    newPostText: 'it-kamasutra.com'
}

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => {
    return (
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}

export default profileReducer;