import React, { Fragment} from 'react'
import ProfileDetail from './ProfileDetail'
import "./ProfileDetail.css"
import "./ProfileList.css"

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
        <Fragment>
            <div className ="profileList">
                <ul className ="ul">{options}</ul>
            </div>
        </Fragment>
    )
}

export default ProfileList
