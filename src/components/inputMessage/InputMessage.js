import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const InputMessage = ({chat}) => {
    const needToEdit = useSelector((state) => state.mainReducer.needToEdit)
    const dispatch = useDispatch();
    const inp = useRef();
    const [editingMode, setEditingMode] = useState(false)

    useEffect(() => {
        if (needToEdit) {
            inp.current.value = needToEdit[1]
        }
    }, [needToEdit])

    const formSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        let payloadDate = `${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

        if (chat === 'flood' && inp.current.value) {
            dispatch({type: 'ADD_NEW_MESSAGE_FLOOD',
                payload: {
                    id: date.getTime(),
                    name: 'VALERA VDV',
                    time: payloadDate,
                    messageText: inp.current.value }})
        }
        if (chat === 'work' && inp.current.value) {
            dispatch({type: 'ADD_NEW_MESSAGE_WORK',
                payload: {
                    id: date.getTime(),
                    name: 'Геннадий Урич',
                    time: payloadDate,
                    messageText: inp.current.value }})
        }
        inp.current.value = null;
    }

    return (
            <form className='form-message' onSubmit={formSubmit}>
                <input className='form-message__input' type="text" ref={inp}/>
                <input className='form-message__submit' type="submit"/>
            </form>
    )
}

export default InputMessage;