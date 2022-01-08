const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addNewMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (text) => {
    return (
        {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
    )
}

export default dialogsReducer;