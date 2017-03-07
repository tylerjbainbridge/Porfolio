import React, { Component } from 'react';
import { Link } from 'react-router';

class NavLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isActive = (this.props.location.pathname === this.props.to);
        return (
            <Link to={this.props.to} className={isActive ? 'active' : ''}>
                {isActive ? `-> ${this.props.text}`: this.props.text}
            </Link>
        );
    }
}

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <NavLink
                    text="About"
                    to="/"
                    {...this.props}
                />
                <NavLink
                    text="Skills"
                    to="/skills"
                    {...this.props}
                />
                <NavLink
                    text="Experience"
                    to="/experience"
                    {...this.props}
                />
            </nav>
        );
    }
}

export default NavBar;