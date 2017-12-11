import React from 'react';
import Highlighter from 'react-highlight-words';
// import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

class Company extends React.Component {

    onActive = (e) => {
        if(e.pseudoElement === '::after' && this.props.active ) {
            this.props.history.push(`/company/${this.props.id}`);
        }
    };
    
    render() {
        
        const img = (this.props.logo) ? <img src={this.props.logo} alt={this.props.name} /> : '';

        let classList = classNames({
            'Company': true,
            'Company--active': this.props.active
        });
        
        return (

            <div className={classList} draggable="false" onTransitionEnd={this.onActive} onClick={() => this.props.onClick(this.props.id)}>
                <div className="Company__logo">
                    { img }
                </div>
                <div className="Company__name">
                    <Highlighter
                        highlightClassName="highlight"
                        textToHighlight={this.props.name}
                        searchWords={[ this.props.highlight ]} />
                </div>
            </div>
        );
    }
}

export default withRouter(Company);