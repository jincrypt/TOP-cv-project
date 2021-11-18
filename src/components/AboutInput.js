import React, { Component } from 'react';
import data from "./data";
import Button from './FormComponents/FormButtons';

export default class AboutInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: data.about,
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
                    
                        <span>
                            <Button buttonName="Submit" buttonEvent={this.confirmChange} />
                            <Button buttonName="Cancel" buttonEvent={this.props.toggle} classAppend="red" />
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}