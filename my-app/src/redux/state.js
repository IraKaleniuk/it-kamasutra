import {rerenderEntireTree} from "../render";

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
        ]
    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;