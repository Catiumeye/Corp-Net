import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

const InputMessage = ({chat}) => {
    const needToEditFlood = useSelector((state) => state.floodReducer.needToEditFlood);
    const needToEditWork = useSelector((state) => state.workReducer.needToEditWork);
    const editingModeFlood = useSelector(state => state.floodReducer.editingModeFlood)
    const editingModeWork = useSelector(state => state.workReducer.editingModeWork)
    const dispatch = useDispatch();
    const inp = useRef();

    console.log(editingModeWork)

    useEffect(() => {
        if (chat === 'flood') {
            if (needToEditFlood !== false) {
                inp.current.value = needToEditFlood[1]
            }
        }
        if (chat === 'work') {
            if (needToEditWork) {
                inp.current.value = needToEditWork[1]
            }
        }
    }, [needToEditFlood, needToEditWork, chat])

    const formSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        let payloadDate = `${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

        if (chat === 'flood' && inp.current.value && editingModeFlood) {
            dispatch({type: 'EDIT_MESSAGE_FLOOD_2',
                payload: {id: needToEditFlood[0], newMsgFlood: inp.current.value}})
        }
        if (chat === 'flood' && inp.current.value && !editingModeFlood) {
            dispatch({type: 'ADD_NEW_MESSAGE_FLOOD',
                payload: {
                    id: date.getTime(),
                    name: 'VALERA VDV',
                    time: payloadDate,
                    messageText: inp.current.value }})
        }
        if (chat === 'work' && inp.current.value && editingModeWork) {
            dispatch({type: 'EDIT_MESSAGE_WORK_2',
                payload: {id: needToEditWork[0], newMsgWork: inp.current.value}})
        }
        if (chat === 'work' && inp.current.value && !editingModeWork) {
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