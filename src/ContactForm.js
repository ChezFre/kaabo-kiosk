import React from 'react';
// import {client} from './client'

export default class ContactForm extends React.Component {

    state = {
        name: '',
        email: ''
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    handleChange = (event) => {
        // console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="modal__title">
                    Laat <strong>{this.props.firstname} {this.props.lastname}</strong> weten dat je er bent.
                </div>
                
                <form className="form--contact" onSubmit={(e) =>this.props.onSubmit( e, this.props.id, this.state.name, this.state.email )}>
                    <div className="form-items">
                        <div className="form-item">
                            <label>
                                <span>Naam</span>
                                <input type="text" name="name" ref={ (input) => this.nameInput = input } value={this.state.name} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="form-item">
                            <label>
                                <span>E-mail</span>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                            </label>
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit">Contacteren</button>
                    </div>
                </form>
            </div>
        );
    }
}