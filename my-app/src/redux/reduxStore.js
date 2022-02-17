import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage"
/*const persistConfig = {
    key: "root",
    storage
}*/

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

// const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;