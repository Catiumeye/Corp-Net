import React, {useEffect} from "react";
import InputMessage from "../InputMessage";
import UserMessage from "../UserMessage";
import vdv from '../../messageData/workMessages.json';
import {useDispatch, useSelector} from "react-redux";
import {makeStateForWork} from "../../actions";


const WorkChat = () => {
    const dispatch = useDispatch();
    const msgList =  useSelector((state) => state.workReducer.messagesWork);

    useEffect(() => {
        dispatch(makeStateForWork(vdv));
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

export default WorkChat;