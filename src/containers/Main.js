import React, { Component, Fragment }from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import ProfileListContainer from './ProfileListContainer';
import FormComponent from '../components/FormComponent'
import Navbar from '../components/Navbar'

class Main extends Component {


    render(){
        return (
            <Router>
                <Fragment>
                <Navbar/>
                    <Switch>
                    < Route exact path="/" component={ProfileListContainer}/>
                    < Route path = "/new_profile" component= {FormComponent}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Main;
