import React,{Fragment} from 'react'
import "./ProfileDetail.css"
import profileimage from "./ppl.jpg"
import placeholder from "./placeholder.png"



const ProfileDetail = (props) => {

    return (
        <Fragment>
        <div className ="list-profile">


            <div className = "margin-right">
            <img src={profileimage} alt="Italian Trulli" className="profile"></img>
            </div>

            <div>
                <li>
                <div className = "profile-header-info">
                    <h2><strong>{props.first_name} {props.last_name}</strong> - Software Engineer</h2>
                    <button className="view-profile-button">View Profile</button>
                </div>
                <div className = "profile-sub-info">
                    <p> Asking Salary:£24000 </p>
                    <p> Location Base: Edinburgh </p>
                    <p> Role: Permanent </p>
                </div>
                <h4> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h4>
                <div className ="langauge">
                <p>{props.languages}</p>
                </div>
                </li>

            </div>
        </div>
        </Fragment>

    )
}

export default ProfileDetail
