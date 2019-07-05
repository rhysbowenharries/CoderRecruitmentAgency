import React, { Component, Fragment }from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => (

    <nav className = "navbar">
    <h1> logo </h1>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new_profile">New Profile</Link></li>
    </ul>
    </nav>
)

export default Navbar;
