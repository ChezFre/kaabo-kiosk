import './Letterbar.css';

import React      from 'react';
import classNames from 'classnames';


export default class Letterbar extends React.Component {

    generateChars() {
        let chars = [];

        for (let i = 65; i <= 90; i++) {

            let classList = classNames({
                'Letterbar__letter': true,
                'Letterbar__letter--active': this.props.letter === String.fromCharCode('00' + i)
            });

            chars.push(
                <li key={i}
                    className={classList}
                    onClick={() => this.props.onLetterClick( String.fromCharCode('00' + i) ) }>
                    {String.fromCharCode('00' +  i)}
                </li>
            );
        }

        return chars;
    }
    
    render() {
        return (
            <ul className="Letterbar">
                {this.generateChars()}
            </ul>
        );
    }

}