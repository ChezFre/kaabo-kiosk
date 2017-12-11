import React from 'react';
import Company from './Company'
import Style from './CompanyDashboard.css';

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