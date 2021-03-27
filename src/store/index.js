import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {mainReducer} from "../reducers/mainReducer";


const rootReducer = combineReducers({
    mainReducer
})

export const store = createStore(rootReducer, composeWithDevTools())