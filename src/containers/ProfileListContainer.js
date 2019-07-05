import React, { Component, Fragment } from "react";
import ProfileList from "../components/ProfileList"

class ProfileListContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
        
            profiles: [ ]
        }
        this.addProfile = this.addProfile.bind(this)
    }  

    addProfile(newProfile) {
        newProfile.id = this.state.profiles.length + 1
        this.setState(prevState => {
            return {profiles: [newProfile, ...prevState.profiles ]}
        })
    }

    render(){
        return(
            <Fragment>
                
                    <ProfileList profiles= {this.state.profiles}/>                
                 
            </Fragment>
        )    
    }

}

export default ProfileListContainer;