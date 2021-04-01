const initialState = {
    userList: [],
    showAvatarPopup: false,
    showConnectAccountPopup: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SHOW_AVATAR_POPUP_CHANGE':
            const avatarPopupStatus = state.showAvatarPopup ? false : true;
            return {...state, showAvatarPopup: !state.showAvatarPopup}

        case 'SHOW_CONNECT_ACCOUNT_POPUP_CHANGE':

            return {...state, showConnectAccountPopup: !state.showConnectAccountPopup}

        default:
            return state;
    }
}