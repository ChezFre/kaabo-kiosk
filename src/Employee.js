import React from 'react';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom'
import accent_folder from './accent-fold';

export default class Employee extends React.Component {

    render() {

        return (
            <div className="employee">
                <div className="employee__photo">
                    {/* <img src="" width="40" height="40" alt="" /> */}
                </div>
                <div className="employee__data">

                    <div className="employee__name">
                        <Highlighter
                            highlightClassName='highlight'
                            sanitize={accent_folder}
                            textToHighlight={`${this.props.firstname} ${this.props.lastname}`}
                            searchWords={[ this.props.highlight ]} />
                    </div>
                    <div className="employee__number">{this.props.phone}</div>
                </div>
                <div className="employee__contact">
                    <ul>
                        <li>
                            <Link to={`/company/${this.props.companyId}/${this.props.companySlug}/employee/${this.props.id}/${this.props.slug}/contact`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14">
                                    <path fill="#00A6FF" d="M7.5,0 C3.3575,0 0,2.91009091 0,6.49918182 C0,8.02009091 0.5825,9.42072727 1.516875,10.4217273 L0,14 L4.726875,12.5618182 C10.66125,14.2150909 15,10.493 15,6.49918182 C15,2.91009091 11.6425,2.2608178e-15 7.5,0 Z"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}