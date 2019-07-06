import React, { Component, Fragment }from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import ProfileListContainer from './ProfileListContainer';
import FormComponent from '../components/FormComponent'
import Navbar from '../components/Navbar'
import Home from '../components/Home'

class Main extends Component {


    render(){
        return (
            <Fragment>
            <Router>
                <Fragment>
                <Navbar/>

                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path = "/sign_up" component= {FormComponent}/>
                    <Route path = "/start_hire" component={ProfileListContainer}/>
                    </Switch>
                </Fragment>
            </Router>
                
               

            </Fragment>
        )
    }
}

export default Main;
