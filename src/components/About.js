import React, { Component } from 'react';
import data from "./data";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: data.about,
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
                        <p style={{height: "22px"}}>
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