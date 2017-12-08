import React from 'react';
import Style from './Letterbar.css';
import classNames from 'classnames'

export default class Letterbar extends React.Component {

    state = {
        activeChar: ''
    };

    generateChars() {
        let chars = [];

        for (let i = 65; i <= 90; i++) {

            let classList = classNames({
                'Letterbar__letter': true,
                'Letterbar__letter--active': this.state.activeChar === String.fromCharCode('00' + i)
            });
            

            chars.push(
                <li key={i}
                    className={classList}
                    onClick={ () => this.letterClicked( String.fromCharCode('00' + i) ) }>
                    {String.fromCharCode('00' +  i)}
                </li>
            );
        }

        return chars;
    }

    letterClicked = (letter) => {

        this.setState({
            activeChar: letter
        });

        if( this.props.onLetterClick ) {
            this.props.onLetterClick( letter );
        }

    };
    
    render() {
        return (
            <ul className="Letterbar">
                {this.generateChars()}
            </ul>
        );
    }

}