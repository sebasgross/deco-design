import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return(
			<div className="navbar">
				<div>
			<img id="logo-mercedes-grossmann" src="https://i.dlpng.com/static/png/173886_preview.png" alt="logo" />
				</div>
			<div className="nav-tags">

			<NavLink to="/about" id="nav-links">SERVICES</NavLink>

			<NavLink to="/about" id="nav-links">PROJECTS</NavLink>

			<NavLink to="/about" id="nav-links">WORK</NavLink>

			<NavLink to="/about" id="nav-links">PORTFOLIO</NavLink>
			</div>
			</div>
        )
    }
}

export default NavBar