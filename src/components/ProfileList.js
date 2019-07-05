import React, {Component, Fragment} from 'react'
import ProfileDetail from './ProfileDetail'

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
        <ul>{options}</ul>
        )
}

export default ProfileList