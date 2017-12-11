import React from 'react';
// import fuzzysearch from 'fuzzysearch';
// import {Switch, Route} from 'react-router';

import accent_folder from './accent-fold';

import Title from './Title';

import CompanyDashboard from './CompanyDashboard'

import Letterbar from './Letterbar'
import Search from './Search'
import './Filter.css';


export default class Home extends React.Component {
    state = {
        searchQuery: '',
    };

    render() {
        return (
            <div>
                <Title />
                <div className="Filter">
                    <Letterbar />
                    <Search />
                </div>
                <CompanyDashboard highlight={this.state.searchQuery} />
            </div>
        );
    }
}
