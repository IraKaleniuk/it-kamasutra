const SEND_MESSAGE = 'SEND-MESSAGE'
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
    isFetching: false
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5, message: action.text,
            }
            return ({
                ...state,
                messages: [...state.messages, newMessage],
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

export const sendMessage = (text) => ({type: SEND_MESSAGE, text})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default dialogsReducer;