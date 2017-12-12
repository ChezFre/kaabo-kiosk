import React from 'react';
import Company from './Company'
import './CompanyDashboard.css';

import { client } from './client';

class CompanyDashboard extends React.Component {
    
    state = {
        companies: [],
        filteredCompanies: [],
        activeCompany: undefined
    };

    componentDidMount() {
        this.fetchCompanies();
    }

    fetchCompanies() {
        client.fetchCompanies()
            .then(companies => {
                this.setState({
                    companies,
                    filteredCompanies: companies
                });
            });
    }

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

    componentWillReceiveProps(nextProps) {
        // alert(`Scroll to ${nextProps.letter}`);
    }

    handleCompanyClick = (id) => {
        this.setState({ activeCompany: id });
    }

    render() {
        return (
            <ul className="CompanyDashboard">
                {this.state.companies.map(company => {
                    return (
                        <li key={company.id} className="CompanyDashboard__company">
                            <Company
                                id={company.id}
                                className="Company"
                                logo={company.logo}
                                name={company.name}
                                slug={company.slug}
                                highlight={this.props.highlight}
                                active={this.state.activeCompany === company.id}

                                onClick={this.handleCompanyClick}
                            />
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default CompanyDashboard;