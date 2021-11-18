import React, { Component } from 'react';
import GithubSVG from './Images/github-white.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-copyright">
                    <div className="light-blue darken-4 center">
                        <p className="white-text">
                            {"Made by "}
                            <a href="https://github.com/jincrypt/TOP-cv-project">
                                {"Jincrypt"}
                                <img height="14px" src={GithubSVG} alt="" />
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}