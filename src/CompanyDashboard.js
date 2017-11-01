import React from 'react';
import Company from './Company'

const CompanyDashboard = (props) => (
    <ul>
        {props.companies.map( company => {
            return (
                <li key={company.id}>
                    <Company
                        id={company.id}
                        logo={company.logo}
                        name={company.name}
                        slug={company.slug}
                        highlight={props.highlight}
                    />
                </li>
            );
        })}
    </ul>
);

export default CompanyDashboard;