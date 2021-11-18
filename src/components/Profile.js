import React, { Component } from 'react';
import data from './data';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: data.name,
            title: data.title,
            address: data.address,
            email: data.email,
            phone: data.phone,
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            {this.state.name}
                        </span>
                        <p>
                            {this.state.title}
                            <br /><br />
                            <i className="fas fa-map"></i> {this.state.address}
                            <br />
                            <i className="fas fa-envelope"></i> {this.state.email}
                            <br />
                            <i className="fas fa-phone"></i> {this.state.phone}
                            <span className="right" style={{cursor:"pointer"}} onClick={this.props.toggle}>
                                <i className="fas fa-pen-to-square">edit</i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}