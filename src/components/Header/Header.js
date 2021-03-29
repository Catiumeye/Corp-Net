import {Link} from "react-router-dom";
import React from "react";


const Header = () => {
    return (
        <header className='header'>
            <div className='header-item header-logo'><Link to='/'>Corp Net</Link></div>
            <div className='header-item header-links'>
                <Link className='header-links__link' to='/work'>JobChat</Link>
                <Link className='header-links__link' to='/flood'>FloodChat</Link>
            </div>
        </header>
    )
}

export {Header}