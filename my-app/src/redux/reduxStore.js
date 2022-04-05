import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer from "./profileReduser"
import dialogsReducer from "./dialogsReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;