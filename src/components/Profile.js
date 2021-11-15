import React, { Component } from 'react';
import ImgProfile from './images/default.png';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={ImgProfile} alt="John Doe" />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            John Doe
                        </span>
                        <p>Career Title</p>
                    </div>
                </div>
            </div>
        );
    }
}