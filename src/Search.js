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
                <button className="Search__button">

                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20">
                        <path fill="#FFF" fill-rule="evenodd" d="M13,18.5 C13,14.3578644 16.3578644,11 20.5,11 C24.6421356,11 28,14.3578644 28,18.5 C28,22.3604614 25.083292,25.5396891 21.3333333,25.954226 L21.3333333,32.6666667 L19.6666667,32.6666667 L19.6666667,25.954226 C15.916708,25.5396891 13,22.3604614 13,18.5 Z M20.5,24.3333333 C23.721661,24.3333333 26.3333333,21.721661 26.3333333,18.5 C26.3333333,15.278339 23.721661,12.6666667 20.5,12.6666667 C17.278339,12.6666667 14.6666667,15.278339 14.6666667,18.5 C14.6666667,21.721661 17.278339,24.3333333 20.5,24.3333333 Z" transform="rotate(-45 2.222 28.404)" />
                    </svg>

                </button>
            </div>
        )
    }
}