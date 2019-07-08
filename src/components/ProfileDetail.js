import React,{Fragment} from 'react'
import "./ProfileDetail.css"
import logo from "./ppl.jpg"

const ProfileDetail = (props) => {

    return (
        
        <Fragment>
            {console.log(props)}
            
        <div className ="list-profile">
        <div className = "margin-right">
        <img src={logo} alt="Italian Trulli" className="profile"></img>
        </div>
        <div>
            <li>
                <h2><strong>{props.first_name} {props.last_name}</strong> - Software Engineer</h2>
                <div className ="profile-description">
                <h4>{props.profile_description}</h4>
                </div>
                <div className ="language">
                <h4>{props.languages}</h4>
                </div>
            </li>
            <button className="view-profile-button">View Profile</button>
        </div>
        </div>
        </Fragment>

    )
}

export default ProfileDetail
