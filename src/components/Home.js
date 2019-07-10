import React, {Fragment} from 'react';
import people from './man.png'
import './Home.css'
import {Link} from 'react-router-dom';


const Home = () => (

    <Fragment>
        <div className ="home">
            <div className="main-content-left">
                <h1>Be the first to hire top E30 talent</h1>
                <h3>Keen. Eager. Talented. Your next employee waits<br/> on the other side of this button.</h3>
                <Link to="/start_hire"><button className="button-home">View Profiles</button></Link>
                <Link to="/sign_up"><button className="button-signup">Sign Up</button></Link>
            </div>
            <div className="main-content-right">
                <img className="person" src={people}></img>
            </div>
        </div>
    </Fragment>
)
export default Home;
