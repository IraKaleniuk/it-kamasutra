const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post!", likesCount: 10},
                {id: 3, message: "It's my first post!", likesCount: 10},
                {id: 4, message: "It's my first post!", likesCount: 10},
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Ira'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Olia'},
                {id: 4, name: 'Roman'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How your IT?'},
                {id: 3, message: 'Have a nice evening'},
                {id: 4, message: 'Yo'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    /*    addPost() {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        },
        updateNewPostText(newText) {
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state);
        },

        sendMessage() {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        },
        updateNewMessageText(newText) {
            this._state.messagesPage.newMessageText = newText;
            this._callSubscriber(this._state);
        },*/

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => {
    return (
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}
export const addNewMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (text) => {
    return (
        {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
    )
}


export default store;
window.store = store;