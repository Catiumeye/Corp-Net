import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

const InputMessage = ({chat}) => {
    const needToEdit = useSelector((state) => state.mainReducer.needToEditFlood);
    const editingModeFlood = useSelector(state => state.mainReducer.editingModeFlood)
    const dispatch = useDispatch();
    const inp = useRef();


    useEffect(() => {
        if (needToEdit) {
            inp.current.value = needToEdit[1]
        }
    }, [needToEdit])

    const formSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        let payloadDate = `${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

        if (chat === 'flood' && inp.current.value && editingModeFlood) {
            dispatch({type: 'EDIT_MESSAGE_FLOOD_2',
                payload: {id: needToEdit[0], newMsgFlood: inp.current.value}})
        }
        if (chat === 'flood' && inp.current.value && !editingModeFlood) {
            dispatch({type: 'ADD_NEW_MESSAGE_FLOOD',
                payload: {
                    id: date.getTime(),
                    name: 'VALERA VDV',
                    time: payloadDate,
                    messageText: inp.current.value }})
        }
        if (chat === 'work' && inp.current.value && !editingModeFlood) {
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