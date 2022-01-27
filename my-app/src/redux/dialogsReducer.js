const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

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
    newMessageText: '',
    isFetching: false
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5, message: state.newMessageText,
            }
            return ({
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            })
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return ({
                ...state,
                newMessageText: action.newText
            })
        }
        case TOGGLE_IS_FETCHING: {
            return ({
                ...state,
                isFetching: action.isFetching
            })
        }
        default:
            return state;
    }
}

export const addNewMessage = () => ({type: SEND_MESSAGE})
export const updateNewMessage = (text) => {
    return (
        {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
    )
}
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default dialogsReducer;