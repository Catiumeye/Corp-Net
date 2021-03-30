import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewMessageFlood, addNewMessageWork, editMessageFlood2, editMessageWork2} from "../../actions";

const InputMessage = ({chat}) => {
    const needToEditFlood = useSelector((state) => state.floodReducer.needToEditFlood);
    const needToEditWork = useSelector((state) => state.workReducer.needToEditWork);
    const editingModeFlood = useSelector(state => state.floodReducer.editingModeFlood)
    const editingModeWork = useSelector(state => state.workReducer.editingModeWork)
    const dispatch = useDispatch();

    const [message, setMessage] = useState('');

    useEffect(() => {
        if (chat === 'flood' && needToEditFlood !== false) {
            setMessage(needToEditFlood[1]);
        }
        if (chat === 'work' && needToEditWork) {
            setMessage(needToEditWork[1]);
        }
    }, [needToEditFlood, needToEditWork, chat])

    const formSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        let payloadDate = `${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

        if (chat === 'flood' && message && editingModeFlood) {
            dispatch(editMessageFlood2(needToEditFlood[0], message))
        }
        if (chat === 'flood' && message && !editingModeFlood) {
            dispatch(addNewMessageFlood(date.getTime(), payloadDate, message))
        }
        if (chat === 'work' && message && editingModeWork) {
            dispatch(editMessageWork2(needToEditWork[0], message))
        }
        if (chat === 'work' && message && !editingModeWork) {
            dispatch(addNewMessageWork(date.getTime(), payloadDate, message))
        }
        setMessage('')
    }

    return (
            <form className='form-message' onSubmit={formSubmit}>
                <input className='form-message__input' type="text"
                       value={message} onChange={(e) => setMessage(e.target.value)}/>
                <input className='form-message__submit' type="submit"/>
            </form>
    )
}

export default InputMessage;