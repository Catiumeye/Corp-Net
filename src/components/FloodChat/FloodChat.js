import React, { useEffect } from "react";
import UserMessage from "../UserMessage";
import InputMessage from "../InputMessage";
import { useSelector, useDispatch } from "react-redux";
import vdv from '../../messageData/floodMessages.json'
import {makeStateForFlood} from "../../actions";

const FloodChat = () => {
    const dispatch = useDispatch();
    const msgList = useSelector(state => state.floodReducer.messagesFlood);

    useEffect(() => {
        dispatch(makeStateForFlood(vdv));
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