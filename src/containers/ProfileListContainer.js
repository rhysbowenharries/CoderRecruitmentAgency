import React, { Component, Fragment } from "react";
import ProfileList from "../components/ProfileList"
import "./profileContainer.css"

class ProfileListContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            profiles: [
                {first_name: "Alex", last_name: "Smith", languages: "English"},
                {first_name: "John",last_name: "Smith", languages: "English"},
                {first_name: "Andrew",last_name: "Smith", languages: "?????"}
            ]
        }

        // this.addProfile = this.addProfile.bind(this)
    }

    // addProfile(newProfile) {
    //     newProfile.id = this.state.profiles.length + 1
    //     this.setState(prevState => {
    //         return {profiles: [newProfile, ...prevState.profiles ]}
    //     })
    // }

    render(){
        return(
            <Fragment>
                <div className = "search-options">
                <select className = "select-list">
                    <option> Select job tiles ... </option>
                    <option value = "Software Engineer"> Software Engineer </option>
                    <option value = "Engineer Management"> Engineer Management </option>
                    <option value = "UX"> Software Engineer </option>
                    <option value = "Product Manager"> Product Manager </option>
                    <option value = "Front-end Developer"> Front-end Developer </option>
                    <option value = "Mobile App Engineer"> Mobile App Engineer </option>
                </select>
                </div>
                <ProfileList profiles= {this.state.profiles}/>
            </Fragment>
        )
    }

}

export default ProfileListContainer;
