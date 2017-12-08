import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router';
import Splashscreen from './Splashscreen'
import Home from './Home';

import socketClient from './socketClient';
import { toast, ToastContainer } from 'react-toastify'; 


class App extends Component {

    componentDidMount() {
        socketClient.subscribe(this.receiveEvent);
    }

    componentWillUnmount() {
        socketClient.unsubscribe(this.receiveEvent);
    }

    receiveEvent = ( data ) => {
        
        let notification = '';

        if( isNaN(data.feedback.payload) ) {
            notification = 'Deze persoon is momenteel niet aanwezig op de Crib';
        } else {
            notification = `Deze persoon komt je binnen ${data.feedback.payload} ophalen!`;
        }
        
        toast( notification, {
            position: toast.POSITION.TOP_RIGHT
        });

        return;
    }

    render() {

        return (
            <div className="App">
                <ToastContainer closeButton={false} />
                <Switch>
                        <Route path='/' component={Splashscreen} exact />
                        <Route path='/company' component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;
