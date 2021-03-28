import React, {  } from 'react'
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';

import FloodChat from "../floodChat";
import WorkingChat from "../workingChat";
import Home from "../home";

const App = () => {

    return (
        <div className='app'>
            <header className='header'>
                <div className='header-item header-logo'><Link to='/'>Corp Net</Link></div>
                <div className='header-item header-links'>
                    <Link className='header-links__link' to='/work'>JobChat</Link>
                    <Link className='header-links__link' to='/flood'>FloodChat</Link>
                </div>
            </header>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/flood' component={FloodChat}/>
                <Route exact path='/work' component={WorkingChat}/>
                <Redirect from='/' to='/home'/>
            </Switch>
        </div>
    );
}

export default App;
