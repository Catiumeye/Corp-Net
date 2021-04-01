import React, {  } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import {ShowAvatarPopup} from "../Popups/ShowAvatarPopup";
import {Header} from "../Header";
import FloodChat from "../FloodChat";
import WorkChat from "../WorkChat";
import Home from "../Home";
import {useSelector} from "react-redux";

const App = () => {
    const showAvatarPopup = useSelector((state) => state.userReducer.showAvatarPopup);

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
        </div>
    );
}

export default App;
