import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import config from "./config";
import lesson from './slider';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['lesson']
}

const rootReducer = combineReducers({
    config,
    lesson
});

export default persistReducer(persistConfig, rootReducer);
