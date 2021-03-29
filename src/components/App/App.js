import React, {  } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import {Header} from "../Header";
import FloodChat from "../FloodChat";
import WorkChat from "../WorkChat";
import Home from "../Home";

const App = () => {

    return (
        <div className='app'>
            <Header />
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/flood' component={FloodChat}/>
                <Route exact path='/work' component={WorkChat}/>
                <Redirect from='/' to='/home'/>
            </Switch>
        </div>
    );
}

export default App;
