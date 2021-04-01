const initialState = {
    userList: [],
    showAvatarPopup: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SHOW_AVATAR_POPUP_CHANGE':
            let popupStatus = state.showAvatarPopup ? false : true;

            return {...state, showAvatarPopup: popupStatus}


        default:
            return state;
    }
}