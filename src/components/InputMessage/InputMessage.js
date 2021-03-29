import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewMessageFlood, addNewMessageWork, editMessageFlood2, editMessageWork2} from "../../actions";

const InputMessage = ({chat}) => {
    const needToEditFlood = useSelector((state) => state.floodReducer.needToEditFlood);
    const needToEditWork = useSelector((state) => state.workReducer.needToEditWork);
    const editingModeFlood = useSelector(state => state.floodReducer.editingModeFlood)
    const editingModeWork = useSelector(state => state.workReducer.editingModeWork)
    const dispatch = useDispatch();
    const inp = useRef();

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
            dispatch(editMessageFlood2(needToEditFlood[0], inp.current.value))
        }
        if (chat === 'flood' && inp.current.value && !editingModeFlood) {
            dispatch(addNewMessageFlood(date.getTime(), payloadDate, inp.current.value))
        }
        if (chat === 'work' && inp.current.value && editingModeWork) {
            dispatch(editMessageWork2(needToEditWork[0], inp.current.value))
        }
        if (chat === 'work' && inp.current.value && !editingModeWork) {
            dispatch(addNewMessageWork(date.getTime(), payloadDate, inp.current.value))
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