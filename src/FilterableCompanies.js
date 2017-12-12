import React            from 'react';

import './Filter.css';


import Search           from './Search';
import Letterbar        from './Letterbar';
import CompanyDashboard from './CompanyDashboard';

/** */

export default class FilterableCompanies extends React.Component {

    state = {
        letter: '',
        query: '',
    }

    handleLetterClick = (letter) => {
        this.setState({ letter });
    };

    handleSearch = (query) => {
        this.setState({ query });
    };

    render() {
        return (
            <div>
                <div className="Filter">
                    <Letterbar letter={this.state.letter} onLetterClick={this.handleLetterClick} />
                    <Search    query={this.state.query}   onSearch={this.handleSearch} />
                </div>
                <CompanyDashboard filter={this.state.query} letter={this.state.letter} />
            </div>
        );
    }
}