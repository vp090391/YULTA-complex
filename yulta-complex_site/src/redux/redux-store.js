import {combineReducers, createStore} from "redux";
import aboutLaboratoryReducer from "./aboutLaboratory-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    aboutLaboratoryPage: aboutLaboratoryReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;