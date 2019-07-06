import React from 'react'
import ProfileDetail from './ProfileDetail'
import "./ProfileDetail.css"

const ProfileList = (props) => {

    const options = props.profiles.map( (profile, index) => {

        return <ProfileDetail
        key= {index}
        first_name = {profile.first_name}
        last_name = {profile.last_name}
        languages = {profile.languages}
        />
    })

    return(
        <div >
        <ul >{options}</ul>
        </div>
    )
}

export default ProfileList
