import React from 'react';
import styles from './Title.css';
export default class Title extends React.Component {

    render() {
        return (
            <header className="Header">
                <h1 className="Header__title">Meld je aan bij een bedrijf</h1>
                <span className="Header__description">Tap op een bedrijfsnaam om te starten</span>
            </header>
        );
    }
}