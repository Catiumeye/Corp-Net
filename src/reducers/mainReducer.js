const initialState = {
    messagesFlood: [],
    messagesWork: [],
    needToEdit: [null, null]
}

export const mainReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'MAKE_STATE_FOR_FLOOD':
            return {...state, messagesFlood: [...action.payload]}
        case 'ADD_NEW_MESSAGE_FLOOD':
            return {...state, messagesFlood: [...state.messagesFlood, action.payload] }
        case 'EDIT_MESSAGE_FLOOD_1':
            let vdvFlood = null;
            state.messagesFlood.forEach((item) => {
                if (item.id === action.payload) vdvFlood = item.messageText;
            })
            return {...state, needToEdit: [action.payload, vdvFlood]}
        case 'EDIT_MESSAGE_FLOOD_2':
            return {...state, needToEdit: action.payload}
        case 'REMOVE_MESSAGE_FLOOD':
            const newMsgListFlood = state.messagesFlood.filter((item) => item.id !== action.payload)
            return {...state, messagesFlood: newMsgListFlood}


        case 'MAKE_STATE_FOR_WORK':
            return {...state, messagesWork: [...action.payload]}
        case 'ADD_NEW_MESSAGE_WORK':
            return {...state, messagesWork: [...state.messagesWork, action.payload] }
        case 'EDIT_MESSAGE_WORK':
            return {...state, messagesWork: state.messagesWork}
        case 'REMOVE_MESSAGE_WORK':
            const newMsgWork = state.messagesWork.filter((item) => item.id !== action.payload)
            return {...state, messagesWork: newMsgWork}
        default:
            return state;
    }
}