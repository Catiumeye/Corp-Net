const initialState = {
    userList: [{id: 228, name: 'Пажылая Мафпа', password: 54, status: 'user'}],
    selectedUser: {id: 228, name: 'Пажылая Мафпа', password: 54, status: 'user'},
    showAvatarPopup: false,
    showConnectAccountPopup: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SHOW_AVATAR_POPUP_CHANGE':
            return {...state, showAvatarPopup: !state.showAvatarPopup}

        case 'SHOW_CONNECT_ACCOUNT_POPUP_CHANGE':
            return {...state, showConnectAccountPopup: !state.showConnectAccountPopup}


        case 'ADD_USER':
            return {...state, userList: [...state.userList, action.payload]}

        case 'SWITCH_USER':
            let switchNewUser = null;
            state.userList.forEach(item => {
                if (item.id === action.payload) {
                    switchNewUser = item;
                }
            })
            return {...state, selectedUser: switchNewUser}
        default:
            return state;
    }
}