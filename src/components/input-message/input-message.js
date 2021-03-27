import React, {useRef} from "react";
import {useDispatch} from "react-redux";

const InputMessage = ({chat}) => {
    const dispatch = useDispatch();
    const inp = useRef();

    const formSubmit = (e) => {
        const date = new Date();
        let payloadDate = `${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        e.preventDefault();
        if (chat === 'flood' && inp.current.value) {
            dispatch({type: 'ADD_NEW_MESSAGE_FLOOD',
                payload: {
                    id: date.getTime(),
                    name: 'VALERA VDV',
                    time: payloadDate,
                    messageText: inp.current.value }})
        }
        inp.current.value = null;
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type="text" ref={inp}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default InputMessage;