import {combineReducers, createStore} from "redux";
import aboutLaboratoryReducer from "./aboutLaboratory-reducer";
import headerReducer from "./header-reducer"
import footerReducer from "./footer-reducer"


let reducers = combineReducers({
    header: headerReducer,
    aboutLaboratoryPage: aboutLaboratoryReducer,
    footer: footerReducer,
});

let store = createStore(reducers);

export default store;