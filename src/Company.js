import React from 'react';
import Highlighter from 'react-highlight-words';
import { NavLink } from 'react-router-dom';

export default class Company extends React.Component {
    
    render() {
        
        const img = (this.props.logo) ? <img src={this.props.logo} alt={this.props.name} /> : '';
        
        return (

            <div className="Company" draggable="false">
                <NavLink to={`/company/${this.props.id}/${this.props.slug}`} className="Company__link">
                    <div className="Company__logo">
                        { img }
                    </div>
                    <div className="Company__name">
                        <Highlighter
                            highlightClassName="highlight"
                            textToHighlight={this.props.name}
                            searchWords={[ this.props.highlight ]} />
                    </div>
                </NavLink>
            </div>
        );
    }
}