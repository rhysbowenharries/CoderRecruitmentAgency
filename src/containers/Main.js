import React, { Component, Fragment }from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import ProfileListContainer from './ProfileListContainer';
import FormComponent from '../components/FormComponent'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import ProfileIndividual from "./ProfileIndividual"
import {Link} from 'react-router-dom';

class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      profiles: [],
      profileid:null
    }
    this.handleProfile = this.handleProfile.bind(this)
  }



  handleProfile(eventID){
      this.setState({profileid:eventID})
      // return (
      //     <Link to=`/start_hire/${this.state.profileid}` component=<ProfileIndividual profile{this.state.profileid}/>
      // )
  }

  componentDidMount() {
    const url = 'http://localhost:8080/programmers';

    fetch(url)
      .then(res => res.json())
      .then(profiles => this.setState({profiles: profiles}))
      .catch(err=>console.error);
  }


    render(){
        return (
            <Fragment>

            <Router>
                <Fragment>
                    <Navbar/>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path = "/sign_up" component= {FormComponent}/>
                    <Route exact path = "/start_hire"  render={() => {
                      return <ProfileListContainer submit = {this.handleProfile} profiles={this.state.profiles}/>
                    }}/>
                    <Route path = '/start_hire/{this.state.profileid}' component = <ProfileIndividual profile={this.state.profileid}/>/>
                    </Switch>
                </Fragment>
            </Router>

            </Fragment>
        )
    }
}

export default Main;
