import React, { Component } from 'react';
import data from './data';
import Button from './FormComponents/FormButtons';

class WorkExperienceView extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            date: data.career[this.props.id].date,
            title: data.career[this.props.id].title,
            company: data.career[this.props.id].company,
            description: data.career[this.props.id].description,
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
                            <strong>{this.state.company}</strong>
                            <p>
                                <strong>{this.state.title}</strong>
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

class WorkExperienceEdit extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            date: data.career[this.props.id].date,
            title: data.career[this.props.id].title,
            company: data.career[this.props.id].company,
            description: data.career[this.props.id].description,
        };
        this.handleChange = this.handleChange.bind(this);
        this.confirmChange = this.confirmChange.bind(this);
        this.descriptionFieldRef = React.createRef();
    }

    componentDidMount() {
        this.props.onLoad(this.descriptionFieldRef.current);
    }

    confirmChange() {
        data.career[this.props.id].date = this.state.date.trim();
        data.career[this.props.id].title = this.state.title.trim();
        data.career[this.props.id].company = this.state.company.trim();
        data.career[this.props.id].description = this.state.description.trim();
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
                                placeholder="Employment Dates"
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
                                        placeholder="Company Name"
                                        id="company"
                                        type="text" 
                                        value={this.state.company}
                                        onChange={this.handleChange}
                                    />
                                    <input 
                                        placeholder="Position Title"
                                        id="title"
                                        type="text" 
                                        value={this.state.title}
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
                    <span className="right material-icons" style={{cursor:"pointer"}} onClick={this.props.deleteCareer} data-key={this.props.id}>
                        delete
                    </span>
                </div>
            </div>
        )
    }
}

class WorkExperienceAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: data.career.length, 
            date: "",
            company: "",
            title: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveWorkExperience = this.saveWorkExperience.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    saveWorkExperience() {
        let newData = {
            id: this.state.id,
            date: this.state.date.trim(),
            company: this.state.company.trim(),
            title: this.state.title.trim(),
            description: this.state.description.trim(),
        }
        data.career.push(newData)
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
                                placeholder="Employment Dates"
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
                                        placeholder="Company"
                                        id="company"
                                        type="text" 
                                        value={this.state.company}
                                        onChange={this.handleChange}
                                    />
                                    <input 
                                        placeholder="Position Title"
                                        id="title"
                                        type="text" 
                                        value={this.state.title}
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
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </span>
                        </form>  
                    </blockquote>
                    <span>
                        <Button buttonName="Submit" buttonEvent={this.saveWorkExperience} />
                        <Button buttonName="Cancel" buttonEvent={this.props.toggle} classAppend="red" />
                    </span>  
                </div>
            </div>
        )
    }
}

class WorkExperienceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experienceInput: false
        }
        this.experienceEdit = this.experienceEdit.bind(this);
    }

    experienceEdit() {
        this.setState({ experienceInput: !this.state.experienceInput })
    }

    render() {
        return (
            this.state.experienceInput ? 
                <WorkExperienceEdit id={this.props.id} toggle={this.experienceEdit} deleteCareer={this.props.deleteCareer} onLoad={this.props.onLoad} /> 
                    :
                <WorkExperienceView  id={this.props.id} toggle={this.experienceEdit} />
        )
    }
}

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            career: data.career,
            experienceAdd: false,
        }
        this.deleteCareer = this.deleteCareer.bind(this);
        this.experienceAdd = this.experienceAdd.bind(this);
    }

    experienceAdd() {
        this.setState({ experienceAdd: !this.state.experienceAdd });
    }

    deleteCareer(e) {                
        // Easy implementation to avoid sorting/reorganizing an array once an item is deleted.
        delete data.career[e.target.dataset.key];
        this.setState({career : data.career});
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h6>
                        <strong>EXPERIENCE</strong>
                    </h6>
                    {this.state.career.map((item) => {
                        return (<WorkExperienceCard id={(item.id)} key={item.id} deleteCareer={this.deleteCareer} onLoad={this.props.onLoad}/>)
                    })}
                    {this.state.experienceAdd ? 
                        <WorkExperienceAdd toggle={this.experienceAdd} />
                        :
                        (<p style={{height: "22px"}}>
                            <span className="right material-icons" style={{cursor:"pointer"}} onClick={this.experienceAdd}>
                                add
                            </span>
                        </p>)
                    }


                </div>
            </div>
        )
    }
}