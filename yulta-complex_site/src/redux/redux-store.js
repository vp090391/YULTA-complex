import {combineReducers, createStore} from "redux";
import aboutLaboratoryReducer from "./aboutLaboratory-reducer";
import headerReducer from "./header-reducer"


let reducers = combineReducers({
    header: headerReducer,
    aboutLaboratoryPage: aboutLaboratoryReducer,
});

let store = createStore(reducers);

export default store;