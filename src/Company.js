import React from 'react';
import Highlighter from 'react-highlight-words';
import { NavLink } from 'react-router-dom';

export default class Company extends React.Component {
    
    render() {
        
        const img = (this.props.logo) ? <img src={this.props.logo} alt={this.props.name} /> : '';
        
        return (

            <div className="company" draggable="false">
                <NavLink to={`/company/${this.props.id}/${this.props.slug}`}>
                    <div className="company__logo">
                        { img }
                    </div>
                    <div className="company__name">
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