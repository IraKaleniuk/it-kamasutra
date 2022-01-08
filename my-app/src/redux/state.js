import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReducer";


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

    dispatch(action) {

        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;