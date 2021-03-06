import React,{Component, Fragment} from 'react'
import "./ProfileDetail.css"
import profileimage from "./ppl.jpg"
import placeholder from "./placeholder.png"
import ProfileIndividualEdit from "../containers/ProfileIndividualEdit"
import {Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Edit from './edit.png'
import {Link} from 'react-router-dom';




class ProfileDetail extends Component{

    constructor(props){
        super(props)
        this.state = {
            toProfileList: false,
        }
        this.profile = props
        this.extraProfileInfoContainer = React.createRef();
        this.handleButtonSelection = this.handleButtonSelection.bind(this)
        this.handleID = this.handleID.bind(this)
        this.languageMapper = this.languageMapper.bind(this)

    }

    handleID = (event) => {
        this.props.setProfileID(event.target.value)
    }

    handleButtonSelection = (event) =>{
        this.setState({toProfileList: true})
    }

    handleToggleProfile = (event) => {
        const extraProfileInfoContainer = this.extraProfileInfoContainer.current;
        const button = event.target
        if(extraProfileInfoContainer.classList.contains('hidden')){
            extraProfileInfoContainer.classList.remove('hidden')
            button.classList.add('close')
            button.innerHTML = 'x'
        } else {
            extraProfileInfoContainer.classList.add('hidden')
            button.classList.remove('close')
            button.innerHTML = 'View Profile'
        }
    }

    languageMapper() {
      if (this.props.languages){
     const mappedLanguages = this.props.languages.map(language => {return <li>{language.name}</li>})

    return mappedLanguages}

    }

    render(){

        return (
            <Fragment>
                {/* {console.log("render log",this.props)} */}

                <div className ="list-profile">


                    <div className = "margin-right">

                        <img src={profileimage} alt="Italian Trulli" className="profile"></img>
                    </div>

                    <div className = "left-container">
                        <li>
                            <div className = "profile-header-info">
                                <a><h2><strong>{this.props.first_name} {this.props.last_name}</strong> - Software Engineer</h2></a>
                                <button onClick = {this.handleToggleProfile}  className="profile-button" value={this.props.id}>View Profile</button>
                            </div>


                            <ul className ="langauge">
                                {this.languageMapper(this.props)}
                            </ul>

                            <div ref={this.extraProfileInfoContainer} className = "hidden">

                                <h4 className='sub-description'> {this.props.profileDescription}</h4>

                                <div className='sub'>
                                    <h3> Asking Salary:<br/><br/> £{this.props.salary} </h3><br/>
                                    <h3> Location Base:<br/><br/>  {this.props.location} </h3><br/>
                                </div>

                                <div  className='sub padding-bottom'>
                                    <h3> Role: <br/><br/>{this.props.role} </h3><br/>
                                    <h3>Speciality:<br/><br/> {this.props.jobTitle}</h3><br/>
                                </div>
                                <Link to= "/edit_profile"><button className="edit-button" onClick ={this.handleID} value ={JSON.stringify(this.props)}>Edit Profile</button></Link>
                                <button onClick = {this.handleToggleProfile}  className="delete-button" value={this.props.id}>Delete Profile</button>

                            </div>
                        </li>
                    </div>
                </div>
            </Fragment>
        )
        // }
    }
}


export default ProfileDetail
