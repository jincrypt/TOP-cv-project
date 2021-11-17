import React, { Component } from 'react';
import data from './data';

class WorkExperienceCard extends Component {
    render() {
        return (
            <div className="row mt-top">
                <div className="col xl4 l4 m6 s12">
                    <p className="light-blue darken-4 year_exp white-text">
                        {this.props.career.date}
                    </p>
                </div>
                <div className="col xl8 l8 m6 s12">
                    <blockquote className="no-pad">
                        <h6 className="no-pad mt-bottom">
                            <strong>{this.props.career.title}</strong>
                        </h6>
                        <p>
                            {this.props.career.description}
                        </p>
                    </blockquote>
                </div>
            </div>
        )
    }
}

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            career: data.career,
        }
    }
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h6>
                        <strong>EXPERIENCE</strong>
                    </h6>
                    {this.state.career.map((item) => {
                        return (<WorkExperienceCard career={(item)} key={item.id} />)
                    })}
                    <p style={{height: "22px"}}>
                        <span className="right" style={{cursor:"pointer"}} onClick={this.props.toggle}>
                            <i className="fas fa-pen-to-square">edit</i>
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}