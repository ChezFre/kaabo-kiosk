import React from 'react';
import classNames from 'classnames'

export default class Search extends React.Component {

    state = {
        _open: false
    };

    onSearchClick = (e) => {

        e.preventDefault();

        if( !this.state._open ) {
            this.setState({ _open: true });

            document.querySelector('body').classList.add('search-open');
        }
    };

    render() {

        var classList = classNames({
            'Search': true,
            'Search--open': this.state._open
        });

        return (
            <div className={classList}>
                <button className="Search__button" onClick={this.onSearchClick}>Search</button>
            </div>
        )
    }
}