const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Chipo'},
        {id: 2, name: 'Rubi'},
        {id: 3, name: 'Gyzeppe'},
        {id: 4, name: 'Afiny'},
        {id: 5, name: 'Apon'},
        {id: 6, name: 'Caralik'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Tuli-guli'},
        {id: 3, message: 'Pum-purums'},
        {id: 4, message: 'Tralivali'},
        {id: 5, message: 'Uchuchu utangi'}
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default: return state;
    }
};

export const sendMessageCreator = () =>({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body,});

export default dialogsReducer;