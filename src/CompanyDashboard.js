import React from 'react';
import Company from './Company'
import Style from './CompanyDashboard.css';

const CompanyDashboard = (props) => (
    <ul className="CompanyDashboard">
        {props.companies.map( company => {
            return (
                <li key={company.id} className="CompanyDashboard__company">
                    <Company
                        id={company.id}
                        className="Company"
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