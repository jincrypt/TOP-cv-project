import React, { Component } from 'react';
import data from "./data";

function Button({ buttonName, buttonEvent, classAppend="" }) {
    return (
        <button onClick={buttonEvent} className={"waves-effect waves-light btn-small " + classAppend}>{buttonName}</button>
    )
}

export default class AboutInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: data.about,
            address: data.address,
            email: data.email,
            phone: data.phone,
        };

        this.confirmChange = this.confirmChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.aboutFieldRef = React.createRef();
    }

    componentDidMount() {
        this.props.onLoad(this.aboutFieldRef.current);        
    }

    confirmChange(e) {
        data.about = this.state.about.trim();
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
                        <h6>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <span className="input-field">
                            <textarea 
                                placeholder="Write something about yourself."
                                id="about"
                                type="text"
                                className="materialize-textarea" 
                                value={this.state.about}
                                onChange={this.handleChange}     
                                ref={this.aboutFieldRef}                               
                            />                                
                        </span>
                    </div>
                    
                    
                    <div className="card-action">
                        <h5>
                            <strong>PERSONAL INFO</strong>
                        </h5>
                        <div >
                            <div>
                                <strong>Address:</strong>
                                <form className="grey-text">
                                    <span className="input-field">
                                        <input 
                                            placeholder="Address"
                                            id="address"
                                            type="text"
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                        />
                                    </span>
                                </form> 
                                <span>
                                    <strong>Email:</strong>
                                    <form className="grey-text">
                                        <span className="input-field">
                                            <input 
                                                placeholder="email"
                                                id="email"
                                                type="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                        </span>
                                    </form>  
                                </span>
                                <span>
                                    <strong>Phone:</strong>
                                    <form className="grey-text">
                                        <span className="input-field">
                                            <input 
                                                placeholder="Phone Number"
                                                id="phone"
                                                type="text" 
                                                value={this.state.phone}
                                                onChange={this.handleChange}
                                            />
                                        </span>
                                    </form>  
                                </span>
                                <span>
                                    <Button buttonName="Submit" buttonEvent={this.confirmChange} />
                                    <Button buttonName="Cancel" buttonEvent={this.props.toggle} classAppend="red" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}