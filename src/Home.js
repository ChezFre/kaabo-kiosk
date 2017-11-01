import React from 'react';
import fuzzysearch from 'fuzzysearch';
import {Switch, Route} from 'react-router';

import accent_folder from './accent-fold';

import CompanyDetail from './CompanyDetail'

import { client } from './client';
import CompanyDashboard from './CompanyDashboard'


export default class Home extends React.Component {
    state = {
        companies: [],
        filteredCompanies: [],
        searchQuery: ''
    };

    filter = (e) => {

        console.log('test');

        this.setState({
            searchQuery: e.target.value
        });

        const value = accent_folder(e.target.value.toLowerCase());
        
        const filteredCompanies = this.state.companies.filter( company => {

            const name = accent_folder(company.name);
            const employees = company.employees && company.employees.some( medewerker => fuzzysearch( value, accent_folder(`${medewerker.voornaam.toLowerCase()} ${medewerker.achternaam.toLowerCase()}`) ) );

            return fuzzysearch( value, name.toLowerCase() ) || employees;

        });

        this.setState({
            filteredCompanies
        });

    }

    componentDidMount() {
        this.fetchCompanies();
    }

    fetchCompanies() {
        client.fetchCompanies()
            .then( companies => {
                this.setState({
                    companies,
                    filteredCompanies: companies
                });
            });
    }

    render() {
        return (
            <div>
                <div className="companies">
                    <div className="companies__search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
                        <input type="search" value={this.state.searchQuery} placeholder="Zoek op bedrijf of medewerker" onChange={this.filter} />
                    </div>
                    <CompanyDashboard
                        highlight={this.state.searchQuery}
                        companies={this.state.filteredCompanies}
                    />
                </div>

                <div className="detailpane">
                    <Switch>
                        <Route path='/company' exact render={ () => (
                            <div className="intro"> <img src="cmine-crib.png" alt="" />
                                <p>
                                    Selecteer een bedrijf<br/>
                                    in de linkerkolom
                                </p>
                            </div>
                        )} />
                        <Route path='/company/:companyId/:companySlug' exact
                               render={ props => <CompanyDetail {...props} query={this.state.searchQuery} /> } />
                        <Route path='/company/:companyId/:companySlug/employee/:employeeId/:employeeSlug'
                               render={ props => <CompanyDetail {...props} query={this.state.searchQuery} /> } />
                    </Switch>
                </div>
            </div>
        );
    }
}
