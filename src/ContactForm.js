import React from 'react';
// import {client} from './client'

export default class ContactForm extends React.Component {

    componentDidMount() {
        this.nameInput.focus();
    }

    render() {
        return (
            <div>
                <div className="modal__title">
                    Laat <strong>{this.props.firstname} {this.props.lastname}</strong> weten dat je er bent.
                </div>
                
                <form className="form--contact" onSubmit={(e) =>this.props.onSubmit( e, this.props.id )}>
                    <div className="form-items">
                        <div className="form-item">
                            <label>
                                <span>Naam</span>
                                <input type="text" ref={ (input) => this.nameInput = input } />
                            </label>
                        </div>
                        <div className="form-item">
                            <label>
                                <span>E-mail</span>
                                <input type="email" />
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