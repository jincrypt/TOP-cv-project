import React, { Component } from 'react';
import data from './data';
import Button from './FormComponents/FormButtons';

class EducationView extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            date: data.education[this.props.id].date,
            school: data.education[this.props.id].school,
            program: data.education[this.props.id].program,
            description: data.education[this.props.id].description,
        }
    }

    render() {
        return (
            <div className="row mt-top">
                <div className="col xl4 l4 m6 s12">
                    <p className="light-blue darken-4 year_exp white-text">
                        {this.state.date}
                    </p>
                </div>
                <div className="col xl8 l8 m6 s12">
                <span className="right" style={{cursor:"pointer"}} onClick={this.props.toggle}>
                        <i className="fas fa-pen-to-square">edit</i>
                    </span>
                    <blockquote className="no-pad">
                        <h6 className="mt-bottom">
                            <strong>{this.state.school}</strong>
                            <p>
                                <strong>{this.state.program}</strong>
                            </p>
                        </h6>
                        <p>
                            {this.state.description}
                        </p>
                    </blockquote>
                </div>
            </div>
        )
    }
}

class EducationEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: data.education[this.props.id].date,
            school: data.education[this.props.id].school,
            program: data.education[this.props.id].program,
            description: data.education[this.props.id].description,
        };
        this.handleChange = this.handleChange.bind(this);
        this.confirmChange = this.confirmChange.bind(this);
        this.descriptionFieldRef = React.createRef();
    }

    componentDidMount() {
        this.props.onLoad(this.descriptionFieldRef.current);
    }

    confirmChange() {
        data.education[this.props.id].date = this.state.date.trim();
        data.education[this.props.id].school = this.state.school.trim();
        data.education[this.props.id].program = this.state.program.trim();
        data.education[this.props.id].description = this.state.description.trim();
        this.props.toggle();
    }
    
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <div className="row mt-top">
                <div className="col xl4 l4 m6 s12">
                    <form>
                        <span className="input-field">
                            <input 
                                placeholder="Education Dates"
                                id="date"
                                type="text" 
                                value={this.state.date}
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
                                        placeholder="School Name"
                                        id="school"
                                        type="text" 
                                        value={this.state.school}
                                        onChange={this.handleChange}
                                    />
                                    <input 
                                        placeholder="Program Name"
                                        id="program"
                                        type="text" 
                                        value={this.state.program}
                                        onChange={this.handleChange}
                                    />
                                </span>
                            </form>  
                        </h6>
                        <form>
                            <span className="input-field">
                                <textarea
                                    ref={this.descriptionFieldRef}  
                                    placeholder="Description"
                                    id="description"
                                    type="text" 
                                    className="materialize-textarea"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </span>
                        </form>  
                    </blockquote>
                    <span>
                        <Button buttonName="Submit" buttonEvent={this.confirmChange} />
                        <Button buttonName="Cancel" buttonEvent={this.props.toggle} classAppend="red" />
                    </span>  
                    <span className="right material-icons" style={{cursor:"pointer"}} onClick={this.props.deleteEducation} data-key={this.props.id}>
                        delete
                    </span>
                </div>
            </div>
        )
    }
}

class EducationAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: data.education.length, 
            date: "",
            school: "",
            program: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveEducation = this.saveEducation.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    saveEducation() {
        let newData = {
            id: this.state.id,
            date: this.state.date.trim(),
            school: this.state.school.trim(),
            program: this.state.program.trim(),
            description: this.state.description.trim(),
        }
        data.education.push(newData)
        this.props.toggle();
    }

    render() {
        return (
            <div className="row mt-top">
                {console.log(data.career.length)}
                <div className="col xl4 l4 m6 s12">
                    <form>
                        <span className="input-field">
                            <input 
                                placeholder="Education Dates"
                                id="date"
                                type="text" 
                                value={this.state.date}
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
                                        placeholder="School Name"
                                        id="school"
                                        type="text" 
                                        value={this.state.school}
                                        onChange={this.handleChange}
                                    />
                                    <input 
                                        placeholder="Program Name"
                                        id="program"
                                        type="text" 
                                        value={this.state.program}
                                        onChange={this.handleChange}
                                    />
                                </span>
                            </form>  
                        </h6>
                        <form>
                            <span className="input-field">
                                <textarea
                                    ref={this.descriptionFieldRef}  
                                    placeholder="Description"
                                    id="description"
                                    type="text" 
                                    className="materialize-textarea"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </span>
                        </form>  
                    </blockquote>
                    <span>
                        <Button buttonName="Submit" buttonEvent={this.saveEducation} />
                        <Button buttonName="Cancel" buttonEvent={this.props.toggle} classAppend="red" />
                    </span>  
                </div>
            </div>
        )
    }
}

class EducationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educationInput: false
        }
        this.educationEdit = this.educationEdit.bind(this);
    }

    educationEdit() {
        this.setState({ educationInput: !this.state.educationInput })
    }

    render() {
        return (
            this.state.educationInput ? 
                <EducationEdit id={this.props.id} toggle={this.educationEdit} deleteEducation={this.props.deleteEducation} onLoad={this.props.onLoad} /> 
                    :
                <EducationView  id={this.props.id} toggle={this.educationEdit} />
        )
    }
}

export default class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education: data.education,
            educationAdd: false,
        }
        this.deleteEducation = this.deleteEducation.bind(this);
        this.educationAdd = this.educationAdd.bind(this);
    }

    educationAdd() {
        this.setState({ educationAdd: !this.state.educationAdd });
    }

    deleteEducation(e) {                
        // Easy implementation to avoid sorting/reorganizing an array once an item is deleted.
        delete data.education[e.target.dataset.key];
        this.setState({education : data.education});
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h6>
                        <strong>EDUCATION</strong>
                    </h6>
                    {this.state.education.map((item) => {
                        return (<EducationCard id={(item.id)} key={item.id} deleteEducation={this.deleteEducation} onLoad={this.props.onLoad}/>)
                    })}
                    {this.state.educationAdd ? 
                        <EducationAdd toggle={this.educationAdd} />
                        :
                        (<p style={{height: "22px"}}>
                            <span className="right material-icons" style={{cursor:"pointer"}} onClick={this.educationAdd}>
                                add
                            </span>
                        </p>)
                    }
                </div>
            </div>
        )
    }
}