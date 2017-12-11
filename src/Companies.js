import React from 'react';

import Title               from './Title';
import FilterableCompanies from './FilterableCompanies'


export default class Companies extends React.Component {
    render() {
        return (
            <div>
                <Title
                    title="Meld je aan bij een bedrijf"
                    description="Tap op een bedrijfsnaam om te starten" />
                <FilterableCompanies />
            </div>
        );
    }
}
