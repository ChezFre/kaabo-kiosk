import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router';
import Splashscreen from './Splashscreen'
import Home from './Home';

class App extends Component {

    render() {

        return (
            <div className="App">
                <Switch>
                        <Route path='/' component={Splashscreen} exact />
                        <Route path='/company' component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;
