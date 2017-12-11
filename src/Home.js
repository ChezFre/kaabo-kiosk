import React from 'react';
// import fuzzysearch from 'fuzzysearch';
// import {Switch, Route} from 'react-router';

import accent_folder from './accent-fold';

import Title from './Title';

import CompanyDashboard from './CompanyDashboard'

import Letterbar from './Letterbar'
import Search from './Search'
import Style from './Filter.css';


export default class Home extends React.Component {
    state = {
        searchQuery: '',
    };

    // filter = (e) => {

    //     this.setState({
    //         searchQuery: e.target.value
    //     });

    //     const value = accent_folder(e.target.value.toLowerCase());
        
    //     const filteredCompanies = this.state.companies.filter( company => {

    //         const name = accent_folder(company.name);
    //         const employees = company.employees && company.employees.some( medewerker => fuzzysearch( value, accent_folder(`${medewerker.voornaam.toLowerCase()} ${medewerker.achternaam.toLowerCase()}`) ) );

    //         return fuzzysearch( value, name.toLowerCase() ) || employees;

    //     });

    //     this.setState({
    //         filteredCompanies
    //     });

    // }

    render() {
        return (
            <div>
                <Title />
                <div className="Filter">
                    <Letterbar />
                    <Search />
                </div>
                <CompanyDashboard highlight={this.state.searchQuery} />
                {/* <div className="companies">
                    <div className="companies__search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
                        <input type="search" value={this.state.searchQuery} placeholder="Zoek op bedrijf of medewerker" onChange={this.filter} />
                    </div>
                </div> */}
            </div>
        );
    }
}
