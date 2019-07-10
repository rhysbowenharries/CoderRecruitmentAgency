import React, { Component, Fragment }from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import ProfileListContainer from './ProfileListContainer';
import FormComponent from '../components/FormComponent'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import ProfileIndividualEdit from "./ProfileIndividualEdit"
import {Link} from 'react-router-dom'


class Main extends Component {

    constructor (props) {
        super(props);
        this.state = {
            profiles: [],
            currentProfile:null
        }
        this.handleProfile = this.handleProfile.bind(this)
        this.addProfile = this.addProfile.bind(this)

    }

    handleProfile(currentProfile){
        this.setState({currentProfile:currentProfile})
    }



    componentDidMount() {
        const url = 'http://localhost:8080/programmers';

        fetch(url)
        .then(res => res.json())
        .then(profiles => this.setState({profiles: profiles._embedded.programmers}))
        .catch(err=>console.error);
    }

    addProfile(profile) {
        // works without id for now, might need later
        // profile.id = this.state.profiles.length + 1;
        this.setState(prevState => {
            return {profiles: [...prevState.profiles, profile]}
        })
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
                role: profile.role,
                location: profile.location,
                salary: profile.salary,
                jobTitle: profile.jobTitle,
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
                                return <FormComponent callBack={this.addProfile} />
                            }}/>
                            <Route exact path = "/start_hire"  render={() => {
                                return <ProfileListContainer setProfileID={this.handleProfile} profiles={this.state.profiles}/>
                            }}/>
                            <Route path = '/edit_profile' render={() => {
                                // const profile = this.state.profiles.find((profile) => {profile.id == this.state.profileID})
                                return <FormComponent profileData={this.state.currentProfile} callBack={this.addProfile}/>
                                // return <FormComponent profileData={this.state.profiles.forEach((profile) => {if(profile.id == this.state.profileID){return profile}})} callBack={this.addProfile}/>
                            }}/>
                        </Switch>
                    </Fragment>
                </Router>

            </Fragment>
        )
    }
}

export default Main;
