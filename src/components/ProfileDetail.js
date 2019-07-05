import React, {Component, Fragment} from 'react'

const ProfileDetail = (props) => {

    return (

        <li>
            <p>{props.first_name}</p>
            <p>{props.last_name}</p>
            <p>{props.languages}</p>
        </li>
    
    )
}

export default ProfileDetail
