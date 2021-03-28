import React, {useEffect} from "react";
import InputMessage from "../inputMessage";
import UserMessage from "../userMessage";
import vdv from '../../workMessages.json';
import {useDispatch, useSelector} from "react-redux";


const WorkingChat = () => {
    const dispatch = useDispatch();
    const msgList =  useSelector((state) => state.mainReducer.messagesWork);

    useEffect(() => {
        dispatch({type: 'MAKE_STATE_FOR_WORK', payload: vdv});
    }, [dispatch])

    const MessageList = () => msgList.map((item) => {
        return <UserMessage key={item.id} {...item} chat='work'/>
    })

    return(
        <div>
            <MessageList />
            <InputMessage chat='work'/>
        </div>
    )
}

export default WorkingChat;