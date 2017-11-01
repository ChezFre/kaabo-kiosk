import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Splashscreen extends React.Component {
    render() {
        return <NavLink to="/company">Click to continue!</NavLink>;
    }
}
