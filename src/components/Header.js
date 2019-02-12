import React,{ Component } from 'react';


class Header extends Component {

    render(){
        return (
        <header>
            <div className="head-content">
                <div className="branding">
                    <h1> Movie Analysis</h1>
                </div>
                <div className="theme">
                    <select name="theme" id="theme"
                    value={this.props.theme}
                    onChange={(event) => this.props.updateTheme(event.target.value)}
                    >
                        <option value="light">Light Theme</option>
                        <option value="dark">Dark Theme</option>
                    </select>
                </div>
            </div>

        </header>
        );

    }
}

export default Header;
