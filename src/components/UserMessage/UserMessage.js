import React, {} from "react";
import './UserMessage.css';
import {useDispatch} from "react-redux";
import {editMessageFlood1, editMessageWork1, removeMessageFlood, removeMessageWork} from "../../actions";

const UserMessage = ({id, name, time, messageText, chat}) => {
    const dispatch = useDispatch();

    const removeMessage = () => {
        switch (chat) {
            case 'flood':
                dispatch(removeMessageFlood(id));
                break;
            case 'work':
                dispatch(removeMessageWork(id));
                break;
            default:
                console.log('UserMessage(removeMessage) - has error');
        }
    }
    const editMessage = () => {
        switch (chat) {
            case 'flood':
                dispatch(editMessageFlood1(id));
                break;
            case 'work':
                dispatch(editMessageWork1(id));
                break;
            default:
                console.log('UserMessage(editMessage) - has error');
        }
    }

    return(
        <div className="user-message">
            <div className="user-message__name">{name}</div>
            <div className="user-message__elem user-message__remove" onClick={removeMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </div>
            <div className="user-message__elem user-message__edit" onClick={editMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     className="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path
                        d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
            </div>
            <div className="user-message__time">{time}</div>
            <div className="user-message__message">{messageText}</div>
        </div>
    )
}

export default UserMessage;