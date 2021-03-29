const initialState = {
    messagesFlood: [],
    needToEditFlood: [null, null], /* первый аргумент id, второй текст для редактирования */
    editingModeFlood: false
}

export const floodReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKE_STATE_FOR_FLOOD':
            return {...state, messagesFlood: [...action.payload]}


        case 'ADD_NEW_MESSAGE_FLOOD':
            return {...state, messagesFlood: [...state.messagesFlood, action.payload] }


        case 'EDIT_MESSAGE_FLOOD_1': /* Первый этап редактирования срабатывает по нажатию на шестерёнку */
            //Создает needToEditF с id элемента и текстом, которые нужно изменить и включает режим редактирования
            let vdvFlood = null;
            state.messagesFlood.forEach((item) => {
                if (item.id === action.payload) vdvFlood = item.messageText;
            })
            return {...state, needToEditFlood: [action.payload, vdvFlood], editingModeFlood: true}


        case 'EDIT_MESSAGE_FLOOD_2': /* Второй этап редактирования срабатывает при отправке формы */
            //Заменяет сообщение и возвращает новый массив
            const zaVDV = state.messagesFlood.map((item, index) => {
                if (item.id === state.needToEditFlood[0]) {
                    state.messagesFlood[index].messageText = action.payload.newMsgFlood;
                }
                return item
            })
            return {...state, needToEditFlood: [null, null], messagesFlood: zaVDV, editingModeFlood: false}


        case 'REMOVE_MESSAGE_FLOOD':
            const newMsgListFlood = state.messagesFlood.filter((item) => item.id !== action.payload)
            return {...state, messagesFlood: newMsgListFlood}


        default:
            return state;
    }
}