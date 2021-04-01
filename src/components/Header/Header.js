import {Link} from "react-router-dom";
import React from "react";
import './Header.css';
import avatar from '../../img/OldWolf.jpg';
import {actionShowAvatarPopup, actionShowConnectAccountPopup} from "../../actions";
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const showAvatarPopup = () => {
        dispatch(actionShowAvatarPopup());
    }
    const showAccountPopup = () => {
        dispatch(actionShowConnectAccountPopup())
    }

    return (
        <header className='header'>
            <div className='header-item header-logo'><Link to='/'>Corp Net</Link></div>
            <div className='header-item header-links'>
                <Link className='header-links__link' to='/work'>JobChat</Link>
                <Link className='header-links__link' to='/flood'>FloodChat</Link>
            </div>
            <div className='header-item user-account'>
                <img className='user-account__avatar' src={avatar} alt="vdv"
                    onClick={showAvatarPopup}/>
                <div className='user-account__name'>Валера Жмых</div>
                <div className='user-account__switch' onClick={showAccountPopup}>Change user</div>
            </div>
        </header>
    )
}

export {Header}