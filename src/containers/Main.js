import React, { Component, Fragment }from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import ProfileListContainer from './ProfileListContainer';
import FormComponent from '../components/FormComponent'
import Navbar from '../components/Navbar'
import Home from '../components/Home'

class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      profiles: []
    }
    this.url = 'http://localhost:8080/programmers';
  }

  componentDidMount() {
    fetch(this.url)
    .then(res => res.json())
    .then(profiles => this.setState({profiles: profiles._embedded.programmers}))
    .catch(err=>console.error);
  }

  addProfile(profile) {
    const url = 'http://localhost:8080/programmers'
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: profile.firstName,
        lastName: profile.lastName,
        languages: profile.languages,
        profileDescription: profile.profileDescription
      })
    })
  }


  render(){
    return (
      <Fragment>

      <Router>
      <Fragment>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path = "/sign_up" render={() => {
        return <FormComponent addProfile={this.addProfile}/>
      }}/>
      <Route path = "/start_hire"  render={() => {
        return <ProfileListContainer profiles={this.state.profiles}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>

      </Fragment>
    )
  }
}

export default Main;
