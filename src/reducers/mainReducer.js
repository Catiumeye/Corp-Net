const initialState = {
    messagesFlood: []
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKE_STATE_FOR_FLOOD':
            return {...state, messagesFlood: [...action.payload]}
        case 'ADD_NEW_MESSAGE_FLOOD':
            return {...state, messagesFlood: [...state.messagesFlood, action.payload] }
        case 'EDIT_MESSAGE_FLOOD':
            return {...state, messagesFlood: state.messagesFlood}
        case 'REMOVE_MESSAGE_FLOOD':
            const newMsgFlood = state.messagesFlood.filter((item) => item.id !== action.payload)
            return {...state, messagesFlood: newMsgFlood}
        default:
            return state;
    }
}