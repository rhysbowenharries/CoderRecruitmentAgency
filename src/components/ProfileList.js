import React, { Fragment} from 'react'
import ProfileDetail from './ProfileDetail'
import "./ProfileDetail.css"
import "./ProfileList.css"

const ProfileList = (props) => {

    const handleProfileId = (eventID) => {
        props.submit(eventID)
    }

    const options = props.profiles.map( (profile, index) => {
        return <ProfileDetail
        
        
        key = {index}
        id = {profile.id}
        first_name = {profile.firstName}
        last_name = {profile.lastName}
        languages = {profile.languages}
        profileDescription = {profile.profileDescription}
        role = {profile.role}
        location = {profile.location}
        salary = {profile.salary}
        jobTitle = {profile.jobTitle}
        submit = {handleProfileId}
        />
    })



    return(
        <Fragment>
            <div className ="profileList">
                <ul className ="ul">{options}</ul>
            </div>
        </Fragment>
    )
}

export default ProfileList
