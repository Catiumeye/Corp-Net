import React, {useEffect} from "react";
import avatar from '../../../img/OldWolf.jpg'
import './ShowAvatarPopup.css';
import {actionShowAvatarPopup} from "../../../actions";
import {useDispatch} from "react-redux";

const ShowAvatarPopup = () => {
    const dispatch = useDispatch();

    const hideAvatarPopup = (e) => {
        dispatch(actionShowAvatarPopup());
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';

        return () => {
            body.style.overflow = 'visible';
        }
    }, [])

    return (
        <div className='show-avatar-popup' onClick={hideAvatarPopup}>
            <div className='show-avatar-popup__avatar'>
                <img src={avatar} alt="vdv"/>
            </div>
        </div>
    )
}

export {ShowAvatarPopup}