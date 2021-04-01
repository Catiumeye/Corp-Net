import React, {  } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import {ShowAvatarPopup} from "../Popups/ShowAvatarPopup";
import {Header} from "../Header";
import FloodChat from "../FloodChat";
import WorkChat from "../WorkChat";
import Home from "../Home";
import {useSelector} from "react-redux";
import {ConnectAccountPopup} from "../Popups/ConnectAccountPopup";

const App = () => {
    const showAvatarPopup = useSelector((state) => state.userReducer.showAvatarPopup);
    const showConnectAccountPopup = useSelector((state => state.userReducer.showConnectAccountPopup));
    return (
        <div className='app'>
            <Header />
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/flood' component={FloodChat}/>
                <Route exact path='/work' component={WorkChat}/>
                <Redirect from='/' to='/home'/>
            </Switch>

            {showAvatarPopup && <ShowAvatarPopup/>}
            {showConnectAccountPopup && <ConnectAccountPopup/>}
        </div>
    );
}

export default App;
