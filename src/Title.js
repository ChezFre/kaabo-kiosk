import React from 'react';
import './Title.css';
export default class Title extends React.Component {

    render() {
        return (
            <header className="Header">
                <h1 className="Header__title">{this.props.title}</h1>
                <span className="Header__description">{this.props.description}</span>
            </header>
        );
    }
}