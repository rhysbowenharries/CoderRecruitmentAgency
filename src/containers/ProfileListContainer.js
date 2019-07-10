import React, { Component, Fragment } from "react";
import ProfileList from "../components/ProfileList"
import "./profileContainer.css"

class ProfileListContainer extends Component{

    constructor(props){
        super(props)
        this.render = this.render.bind(this)
        this.handleProfileIdContainer = this.handleProfileIdContainer.bind(this)
    }

    handleProfileIdContainer(currentProfile){
        this.props.setProfileID(currentProfile)
    }


    render(){
        return(
            <Fragment>
                <div className = "search-options">
                <div className = "inline">
                <label htmlFor="select-job">Filter by job-title</label><br/>
                <select id="select-job" className = "select-list">
                    <option> Select job tiles ... </option>
                    <option value = "Software Engineer"> Software Engineer </option>
                    <option value = "Engineer Management"> Engineer Management </option>
                    <option value = "UX"> Software Engineer </option>
                    <option value = "Product Manager"> Product Manager </option>
                    <option value = "Front-end Developer"> Front-end Developer </option>
                    <option value = "Mobile App Engineer"> Mobile App Engineer </option>
                </select>
                </div>

                </div>
                <ProfileList setProfileID= {this.handleProfileIdContainer} profiles={this.props.profiles}/>
            </Fragment>
        )
    }

}

export default ProfileListContainer;
