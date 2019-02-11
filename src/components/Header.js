import React,{ Component } from 'react';
//import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import $ from 'jquery';


class Header extends Component {

    render(){
        return (
        <header>
            <div className="head-content">
                <div className="branding">
                    <h1> Movie Analysis</h1>
                </div>
            </div>

        </header>
        );

    }
}

export default Header;
