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
