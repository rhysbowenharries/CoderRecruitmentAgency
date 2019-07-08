import React,{Fragment} from 'react'
import "./ProfileDetail.css"
import logo from "./ppl.jpg"

const ProfileDetail = (props) => {

    return (
        <Fragment>

        <div className ="list-profile">
        <div className = "margin-right">
        <img src={logo} alt="Italian Trulli" className="profile"></img>
        </div>
        <div>
            <li>
                <h2><strong>{props.first_name} {props.last_name}</strong> - Software Engineer</h2>
                <h4> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h4>
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
