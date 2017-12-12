import React from 'react';

import { Switch, Route } from 'react-router';

import Title         from './Title';
import CompanyDetail from './CompanyDetail';
import FilterableCompanies from './FilterableCompanies';

import Employee      from './Employee'

export default class CompanyView extends React.Component {

    render() {

        let title       = "Meld je aan bij een bedrijf";
        let description = "Tap op een bedrijfsnaam om te starten"
        
        if( this.props.match.params.companyId ) {
            title = "Meld je aan bij BEDRIJFSNAAM";
            description = "Tap op een persoon om deze te contacteren";
        }

        return (
            <div>
                {!this.props.match.params.employeeId &&
                    <Title
                        title={title}
                        description={description} />
                }

                {/* {this.props.match.params.companyId ? <CompanyDetail /> : <FilterableCompanies />} */}
                <Switch>
                    <Route path='/company' component={FilterableCompanies} exact />
                    <Route path='/company/:companyId' component={CompanyDetail} exact />
                    <Route path='/company/:companyId/:companyName/employee/:employeeId' component={Employee} />
                </Switch>
            </div>
        );
    }
}