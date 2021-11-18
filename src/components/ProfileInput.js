import React, { Component } from 'react';
import data from './data';
import Button from './FormComponents/FormButtons';

export default class ProfileInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: data.name,
            title: data.title,
            address: data.address,
            email: data.email,
            phone: data.phone,
        }
        this.confirmChange = this.confirmChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    confirmChange(e) {
        data.name = this.state.name.trim();
        data.title = this.state.title.trim();
        data.address = this.state.address.trim();
        data.email = this.state.email.trim();
        data.phone = this.state.phone.trim();
        this.props.toggle();
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">                            
                            <form className="grey-text">
                                <span className="input-field">
                                    <input 
                                        placeholder="Full Name"
                                        id="name"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </span>
                            </form> 
                        </span>
                        <form className="grey-text">
                            <span className="input-field">
                                <input 
                                    placeholder="Title"
                                    id="title"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                                <input 
                                    placeholder="Location"
                                    id="address"
                                    type="text"
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                />
                                <input 
                                    placeholder="Email"
                                    id="email"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                <input 
                                    placeholder="Phone Number"
                                    id="phone"
                                    type="text"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                />
                            </span>
                        </form> 
                        <span>
                            <Button buttonName="Submit" buttonEvent={this.confirmChange} />
                            <Button buttonName="Cancel" buttonEvent={this.props.toggle} classAppend="red" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}