import React       from 'react';
import Highlighter from 'react-highlight-words';
import classNames  from 'classnames';

import { withRouter, Link } from 'react-router-dom';


class Company extends React.Component {
    
    render() {
        
        const img = (this.props.logo) ? <img src={this.props.logo} alt={this.props.name} /> : '';

        let classList = classNames({
            'Company': true,
            'Company--active': this.props.active
        });
        
        return (

            <div className={classList} draggable="false" /*onTransitionEnd={this.onActive}*/ onClick={() => this.props.onClick(this.props.id)}>
                <Link to={`/company/${this.props.id}`} className="Company__link">
                    <div className="Company__logo">
                        { img }
                    </div>
                    <div className="Company__name">
                        <Highlighter
                            highlightClassName="highlight"
                            textToHighlight={this.props.name}
                            searchWords={[ this.props.highlight ]} />
                    </div>
                </Link>
            </div>
        );
    }
}

export default withRouter(Company);