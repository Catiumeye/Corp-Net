import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {floodReducer} from "./floodReducer";
import {workReducer} from "./workReducer";
import {userReducer} from "./userReducer";

const rootReducer = combineReducers({
    floodReducer,
    workReducer,
    userReducer
})

export const store = createStore(rootReducer, composeWithDevTools())