import React from 'react';
import Employee from './Employee';
import { client } from './client';
import Modal from 'react-modal';
import ContactForm from './ContactForm';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import { TransitionGroup, CSSTransition } from 'react-transition-group' // ES6


export default class CompanyDetail extends React.Component {

    state = {
        company: {
            employees: [],
            fields:    {},
        },
        sent:      false,
        modalOpen: false,
        activeEmployee: {
            fields:    {}
        }
    };

    componentWillMount() {
        this.getCompany( this.props.match.params.companyId );
    }

    componentWillReceiveProps( nextProps ) {        

        this.getCompany( nextProps.match.params.companyId );

        if( nextProps.match.params.employeeId ) {

            this.setState({
                modalOpen: true,
                activeEmployee: this.state.company.employees.filter( medewerker => medewerker.id === nextProps.match.params.employeeId )[0]
            });
        }
    }

    
    // shouldComponentUpdate( nextProps ) {
    //     // console.log('shouldComponentUpdate?');
    //     return this.state.company.id !== nextProps.match.params.companyId;
    // }

    getCompany( id ) {
        client.getCompany( id )
            .then( company => {
                // console.log( company );
                this.setState({ company });
            });
    }

    showModal = ( id ) => {
        this.setState({
            modalOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            modalOpen: false,
            sent: false
        });

        this.props.history.replace(`/company/${this.props.match.params.companyId}/${this.props.match.params.companySlug}`);
    }

    sendForm = ( e, id, name, email ) => {

        e.preventDefault();

        console.log(id, name, email);


        client.contactEmployee(id, name, email)
            .then( (res) => {
                console.log( res );
            });

        // this.setState({
        //     sent: true
        // });
    }

    confirm() {
        return (<div>Pietje</div>)
    }

    render() {

        // const duration = 300;

        return <div className="company--detail">
            {this.state.company.logo && <img src={this.state.company.logo} alt={this.state.company.name} width="50" height="50" className="company__logo" />}
            <div className="company__description">
              {this.state.company.description}
            </div>
            <ul className="employees">
                <TransitionGroup>
                    {this.state.company.employees && this.state.company.employees.map(
                        (medewerker, index) => (
                            <CSSTransition in={true} classNames="slideIn" timeout={250} key={medewerker.id} onExited={() => {}}>
                                <li>
                                    <Employee
                                        id={medewerker.id}
                                        slug={medewerker.slug}
                                        email={medewerker.email}
                                        phone={medewerker.phone}
                                        onClick={this.showModal}
                                        companyId={this.state.company.id}
                                        companySlug={this.state.company.slug}
                                        firstname={medewerker.voornaam}
                                        lastname={medewerker.achternaam}
                                        highlight={this.props.query}
                                    />
                                </li>
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            </ul>

            <Modal style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.4)" }, content: { top: "30px", left: "0", right: "0", bottom: "auto", margin: "auto", width: "555px", height: "325px", padding: "0px", border: "0", borderRadius: "0", overflow: "hidden", borderTop: "5px solid #F5D313", boxShadow: "0 2px 34px rgba(120, 120, 100, 100)" } }} closeTimeoutMS={150} onRequestClose={this.closeModal} shouldCloseOnOverlayClick={true} isOpen={this.state.modalOpen} contentLabel="Contact">
              {!this.state.sent && <ContactForm
                onSubmit={this.sendForm} id={this.state.activeEmployee && this.state.activeEmployee.id}
                firstname={this.state.activeEmployee && this.state.activeEmployee.voornaam}
                lastname={this.state.activeEmployee && this.state.activeEmployee.achternaam} />}
              {this.state.sent && this.confirm()}
            </Modal>
          </div>;
    }
}