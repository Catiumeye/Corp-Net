import React, {useEffect} from "react";
import './ConnectAccountPopup.css'
import {useDispatch} from "react-redux";
import {actionShowConnectAccountPopup} from "../../../actions";

const ConnectAccountPopup = () => {
    const dispatch = useDispatch();

    const hideConnectAccount = () => {
        dispatch(actionShowConnectAccountPopup())
    }
    const accountSubmit = (e) => {
        e.preventDefault();
    }


    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';

        return () => {
            body.style.overflow = 'visible';
        }
    }, [])

    return (
        <div className='popup-full' onClick={hideConnectAccount}>
            <div className='connect-account-popup'>
                <div className=''>
                    <form onSubmit={accountSubmit}>
                        <input type="text"/>
                        <input type="password"/>
                        <input type="submit"/>
                    </form>
                </div>
                <div>
                    <h3>Existing accounts</h3>
                </div>
            </div>
        </div>
    )
}

export {ConnectAccountPopup}