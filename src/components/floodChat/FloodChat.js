import React, { useEffect } from "react";
import UserMessage from "../userMessage";
import InputMessage from "../inputMessage";
import { useSelector, useDispatch } from "react-redux";
import vdv from '../../messageData/floodMessages.json'

const FloodChat = () => {
    const dispatch = useDispatch();
    const msgList = useSelector(state => state.floodReducer.messagesFlood);

    useEffect(() => {
        dispatch({type: 'MAKE_STATE_FOR_FLOOD', payload: vdv});
    }, [dispatch])

    const MessageList = () => msgList.map(item => {
        return <UserMessage key={item.id} {...item} chat='flood'/>
    })

    return(
        <div>
            <MessageList />
            <InputMessage chat='flood'/>
        </div>
    )
}

export default FloodChat;