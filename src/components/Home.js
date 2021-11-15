import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import About from './About';
import AboutInput from './AboutInput';
import M from 'materialize-css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutInput: false,
        }
        this.aboutEdit = this.aboutEdit.bind(this);
    }

    aboutEdit() {
        this.setState({ aboutInput: !this.state.aboutInput })
    }

    aboutFieldAutoResize(textarea) {
        M.textareaAutoResize(textarea);
    }



    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <Profile />
                        </div>
                        <div className="col s12 m8 l9">
                            {this.state.aboutInput ? (
                                    <AboutInput toggle={this.aboutEdit} onLoad={this.aboutFieldAutoResize}/>
                                ) : (
                                    <About toggle={this.aboutEdit}/>
                                )
                            }
                            {/* <Skills />
                            <Experience />
                            <Education />
                            <Portfolios /> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}