import React from 'react';
import classNames from 'classnames'

import './Search.css';

export default class Search extends React.Component {

    render() {

        var classList = classNames({
            'Search': true
        });

        return (
            <div className={classList}>
                <button className="Search__button">Search</button>
            </div>
        )
    }
}