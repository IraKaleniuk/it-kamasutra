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
            newMessageText: 'hello'
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

    addPost() {
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
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
/*
let rerenderEntireTree = (state) => {
    console.log('State was changed')
}

let state = {
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
        newMessageText: 'hello'
    }
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const sendMessage = (text) => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessageText,
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}*/

export default store;
window.store = store;