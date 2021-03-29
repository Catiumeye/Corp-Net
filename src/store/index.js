import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {floodReducer} from "./floodReducer";
import {workReducer} from "./workReducer";


const rootReducer = combineReducers({
    floodReducer,
    workReducer
})

export const store = createStore(rootReducer, composeWithDevTools())