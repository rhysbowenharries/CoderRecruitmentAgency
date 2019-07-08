import React from 'react'
import ProfileDetail from './ProfileDetail'
import "./ProfileDetail.css"

const ProfileList = (props) => {

    const options = props.profiles.map( (profile, index) => {

        return <ProfileDetail
        key= {index}
        first_name = {profile.firstName}
        last_name = {profile.lastName}
        languages = {profile.languages}
        profile_description = {profile.profileDescription}
        />
    })

    return(
        <div >
        <ul >{options}</ul>
        </div>
    )
}

export default ProfileList
