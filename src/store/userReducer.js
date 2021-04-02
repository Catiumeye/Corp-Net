const initialState = {
    userList: [],
    selectedUser: {id: null, name: null, password: null, status: 'guest'},
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
        default:
            return state;
    }
}