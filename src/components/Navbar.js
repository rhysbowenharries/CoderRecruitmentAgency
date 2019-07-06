import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => (

    <nav className = "navbar">
   <div className="logo">
   <h1> logo </h1>
   </div>
   <div className="navContent">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/start_hire">Start hiring now</Link></li>
        <li><Link to="/sign_up">Sign Up</Link></li>
        <li><Link to="/find_a_job">Find a job</Link></li>
    </ul>
    </div>
    </nav>
)

export default Navbar;
