import React, { Component } from 'react';
import data from "./data";

function Button({ buttonName, buttonEvent }) {
    return (
        <button onClick={buttonEvent} class="right waves-effect waves-light grey btn-small">{buttonName}</button>
    )
}


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
                    <Button buttonName="Edit" buttonEvent={this.props.toggle} />
                    <div className="card-content">
                        <h6>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className="grey-text">
                            {this.state.about}                            
                        </p>                        
                    </div>
                    
                    
                    <div className="card-action">
                        <h5>
                            <strong>PERSONAL INFO</strong>
                        </h5>
                        <div className="row">
                            <div className="col">
                                <p>
                                    <strong>Address:</strong>
                                    {this.state.address}
                                </p>
                                <p>
                                    <strong>Email:</strong>
                                    {this.state.email}
                                </p>
                                <p>
                                    <strong>Phone:</strong>
                                    {this.state.phone}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}