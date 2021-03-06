//Flood
const makeStateForFlood = (payload) => {
    return {type: 'MAKE_STATE_FOR_FLOOD', payload}
}
const addNewMessageFlood = (id, payloadDate, messageText, name) => {
    return {type: 'ADD_NEW_MESSAGE_FLOOD',
        payload: {
            id,
            name,
            time: payloadDate,
            messageText }}
}
const removeMessageFlood = (id) => {
    return {type: 'REMOVE_MESSAGE_FLOOD', payload: id}
}
const editMessageFlood1 = (id) => {
    return {type: 'EDIT_MESSAGE_FLOOD_1', payload: id}
}
const editMessageFlood2 = (id, newMsgFlood) => {
    return {type: 'EDIT_MESSAGE_FLOOD_2', payload: {id, newMsgFlood}}
}

// Work
const makeStateForWork = (vdv) => {
    return {type: 'MAKE_STATE_FOR_WORK', payload: vdv}
}
const addNewMessageWork = (id, payloadDate, messageText, name) => {
    return {type: 'ADD_NEW_MESSAGE_WORK',
        payload: {
            id,
            name,
            time: payloadDate,
            messageText}}
}
const removeMessageWork = (id) => {
    return {type: 'REMOVE_MESSAGE_WORK', payload: id}
}
const editMessageWork1 = (id) => {
    return {type: 'EDIT_MESSAGE_WORK_1', payload: id}
}
const editMessageWork2 = (id, newMsgWork) => {
    return {type: 'EDIT_MESSAGE_WORK_2',
        payload: {id, newMsgWork}}
}

//Popups
const actionShowAvatarPopup = () => {
    return {type: 'SHOW_AVATAR_POPUP_CHANGE'}
}
const actionShowConnectAccountPopup = () => {
    return {type: 'SHOW_CONNECT_ACCOUNT_POPUP_CHANGE'};
}

//Account
const addUser = (id, name, password, status) => {
    return {type: 'ADD_USER', payload: {id, name, password, status}}
}
const switchUser = (id) => {
    return {type: 'SWITCH_USER', payload: id}
}

export {
    makeStateForFlood,
    addNewMessageFlood,
    removeMessageFlood,
    editMessageFlood1,
    editMessageFlood2,
    makeStateForWork,
    addNewMessageWork,
    removeMessageWork,
    editMessageWork1,
    editMessageWork2,
    actionShowAvatarPopup,
    actionShowConnectAccountPopup,
    addUser,
    switchUser
}