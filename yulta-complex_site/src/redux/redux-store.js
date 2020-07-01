import {combineReducers, createStore} from "redux";
import aboutLaboratoryReducer from "./aboutLaboratory-reducer";
import headerReducer from "./header-reducer"
import footerReducer from "./footer-reducer"
import navReducer from "./nav-reducer"
import makeRequestReducer from "./makeRequest";

let reducers = combineReducers({
    header: headerReducer,
    nav: navReducer,
    aboutLaboratoryPage: aboutLaboratoryReducer,
    makeRequestPage: makeRequestReducer,
    footer: footerReducer,
});

let store = createStore(reducers);

export default store;