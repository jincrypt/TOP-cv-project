import React, { Component } from 'react';
import data from './data';
import Button from './FormComponents/FormButtons';


/// TO DO: EXPERIENCE FIELDS ARE NOT EDITABLE AT THE MOMENT.
// Maybe we can ignore data, just check current status. Resave everything..?
// Saving should take place in outer component (so ExperienceInput)


class WorkExperienceCardInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            career : data.career[this.props.career.id],
        }
        // this.state = {
        //     description: this.props.career.description,
        // }
        this.descriptionFieldRef = React.createRef();
    }

    componentDidMount() {
        this.props.onLoad(this.descriptionFieldRef.current);
    }

    render() {
        return (
            <div className="row mt-top">
                <div className="col xl4 l4 m6 s12">
                    <form>
                        <span className="input-field">
                            <input 
                                placeholder="Employment Dates"
                                id="date"
                                type="text" 
                                value={this.props.career.date}
                                onChange={this.handleChange}
                            />
                        </span>
                    </form>  
                </div>
                <div className="col xl8 l8 m6 s12">
                    <blockquote className="no-pad">
                        <h6 className="no-pad mt-bottom">                            
                            <form>
                                <span className="input-field">
                                    <input 
                                        placeholder="Position Title"
                                        id="title"
                                        type="text" 
                                        value={this.props.career.title}
                                        onChange={this.handleChange}
                                    />
                                </span>
                            </form>  
                        </h6>
                        <form>
                            <span className="input-field">
                                <textarea
                                    ref={this.descriptionFieldRef}  
                                    placeholder="Job Description"
                                    id="description"
                                    type="text" 
                                    className="materialize-textarea"
                                    value={this.props.career.description}
                                    onChange={this.props.handleChange}
                                />
                            </span>
                        </form>  
                    </blockquote>
                    <span className="right material-icons" style={{cursor:"pointer"}} onClick={this.props.deleteCareer}>
                        delete
                    </span>
                </div>
            </div>
        )
    }
}

export default class ExperienceInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            career: data.career,
        }
        this.deleteCareer = this.deleteCareer.bind(this);
    }

    deleteCareer(e) {        
        data.career.splice(e.target, 1);
        this.setState({career : data.career});
    }

    handleChange(e) {
        console.log(e)
    }

    confirmChange(e) {

    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h6>
                        <strong>EXPERIENCE</strong>
                    </h6>
                    {this.state.career.map((item) => {
                        return (<WorkExperienceCardInput career={item} key={(item.id)} deleteCareer={this.deleteCareer} handleChange={this.handleChange} onLoad={this.props.onLoad} />)
                    })}
                    <span>
                        <Button buttonName="Submit" buttonEvent={this.confirmChange} />
                        <Button buttonName="Cancel" buttonEvent={this.props.toggle} classAppend="red" />
                    </span>                    
                </div>
            </div>
        )
    }
}