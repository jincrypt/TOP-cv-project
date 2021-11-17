import React, { Component } from 'react';
import data from "./data";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: data.about,
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
                        <h6>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className="grey-text">
                            {this.state.about}                            
                        </p>                        
                    </div>
                    
                    
                    <div className="card-action">
                        
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                                <p>
                                    <strong>Address: </strong>
                                    {this.state.address}
                                </p>
                                <p>
                                    <strong>Email: </strong>
                                    {this.state.email}
                                </p>
                                <p>
                                    <strong>Phone: </strong>
                                    {this.state.phone}
                                    <span className="right" style={{cursor:"pointer"}} onClick={this.props.toggle}>
                                        <i className="fas fa-pen-to-square">edit</i>
                                    </span>  
                                </p>

                    </div>
                </div>
            </div>
        )
    }
}