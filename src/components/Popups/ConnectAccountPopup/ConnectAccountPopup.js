import React, {useState, useEffect} from "react";
import './ConnectAccountPopup.css'
import {useDispatch, useSelector} from "react-redux";
import {actionShowConnectAccountPopup, addUser} from "../../../actions";

const ConnectAccountPopup = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const userData = useSelector((state) => state.userReducer.userList);
    console.log(userData)
    const hideConnectAccount = (e) => {
        if (e.target.className.includes('popup-full')) {
            dispatch(actionShowConnectAccountPopup());
        }

    }
    const accountSubmit = (e) => {
        e.preventDefault();
        if (name && pass) {
            const date = new Date();
            const id = date.getTime();

            dispatch(addUser(id, name, pass, 'user'));
        }
        setName('');
        setPass('');
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
            <div className='account-popup'>
                <div className='account-connect'>
                    <form className='account-form' onSubmit={accountSubmit}>
                        <h3>Создать аккаунт</h3>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name}
                               placeholder='name'/>
                        <input type="password" onChange={(e) => setPass(e.target.value)} value={pass}
                               placeholder='password'/>
                        <input type="submit" value='Create account'/>
                    </form>
                </div>
                <div className='account-list'>
                    <h3>Existing accounts</h3>
                </div>
            </div>
        </div>
    )
}

export {ConnectAccountPopup}