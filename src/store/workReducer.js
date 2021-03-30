const initialState = {
    messagesWork: [],
    needToEditWork: [null, ''], /* первый аргумент id, второй текст для редактирования */
    editingModeWork: false
}

export const workReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKE_STATE_FOR_WORK':
            return {...state, messagesWork: [...action.payload]}


        case 'ADD_NEW_MESSAGE_WORK':
            return {...state, messagesWork: [...state.messagesWork, action.payload] }


        case 'EDIT_MESSAGE_WORK_1': /* Первый этап редактирования срабатывает по нажатию на шестерёнку */
            //Создает needToEditF с id элемента и текстом, которые нужно изменить и включает режим редактирования
            let dvdFlood = null;
            state.messagesWork.forEach((item) => {
                if (item.id === action.payload) dvdFlood = item.messageText;
            })
            return {...state, needToEditWork: [action.payload, dvdFlood], editingModeWork: true}


        case 'EDIT_MESSAGE_WORK_2': /* Второй этап редактирования срабатывает при отправке формы */
            //Заменяет сообщение и возвращает новый массив
            const zaDVD = state.messagesWork.map((item, index) => {
                if (item.id === state.needToEditWork[0]) {
                    state.messagesWork[index].messageText = action.payload.newMsgWork;
                }
                return item
            })
            return {...state, needToEditWork: [null, ''], messagesWork: zaDVD, editingModeWork: false}

        case 'REMOVE_MESSAGE_WORK':
            const newMsgWork = state.messagesWork.filter((item) => item.id !== action.payload)
            return {...state, messagesWork: newMsgWork}


        default:
            return state;
    }
}