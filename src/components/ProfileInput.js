import React, { Component } from 'react';
import data from './data';
import Button from './FormComponents/FormButtons';

export default class ProfileInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: data.name,
            title: data.title,
        }
        this.confirmChange = this.confirmChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    confirmChange(e) {
        data.name = this.state.name.trim();
        data.title = this.state.title.trim();
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
                        <p>
                            <form className="grey-text">
                                    <span className="input-field">
                                        <input 
                                            placeholder="Title"
                                            id="title"
                                            type="text"
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                        />
                                    </span>
                                </form> 
                                <span>
                                    <Button buttonName="Submit" buttonEvent={this.confirmChange} />
                                    <Button buttonName="Cancel" buttonEvent={this.props.toggle} classAppend="red" />
                                </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}