import {combineReducers, createStore} from "redux";
import headerReducer from "./header-reducer"
import navReducer from "./nav-reducer"
import aboutLaboratoryReducer from "./aboutLaboratory-reducer";
import accreditationReducer from "./accreditation-reducer";
import makeRequestReducer from "./makeRequest-reducer";
import commentsReducer from "./comments-reducer";
import contactsReducer from "./contacts-reducer";
import footerReducer from "./footer-reducer"


let reducers = combineReducers({
    header: headerReducer,
    nav: navReducer,
    aboutLaboratoryPage: aboutLaboratoryReducer,
    accreditationPage: accreditationReducer,
    makeRequestPage: makeRequestReducer,
    commentsPage: commentsReducer,
    contactsPage: contactsReducer,
    footer: footerReducer,
});

let store = createStore(reducers);

export default store;