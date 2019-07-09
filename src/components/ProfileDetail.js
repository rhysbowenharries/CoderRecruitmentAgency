import React,{Component, Fragment} from 'react'
import "./ProfileDetail.css"
import profileimage from "./ppl.jpg"
import placeholder from "./placeholder.png"
import ProfileIndividual from "../containers/ProfileIndividual"
import {Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Edit from './edit.png'




class ProfileDetail extends Component{

    constructor(props){
        super(props)
        this.state = {
            toProfileList: false
        }
        this.extraProfileInfoContainer = React.createRef();
        this.handleButtonSelection = this.handleButtonSelection.bind(this)

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




    render(){

        return (
            <Fragment>
                {console.log(this.props)}

                <div className ="list-profile">


                    <div className = "margin-right">
                        <Avatar alt="Remy Sharp" src= {profileimage} className={'bigAvatar'}/>
                        {/* <img src={profileimage} alt="Italian Trulli" className="profile"></img> */}
                    </div>

                    <div>
                        <li>
                            <div className = "profile-header-info">
                                <a><h2><strong>{this.props.first_name} {this.props.last_name}</strong> - Software Engineer</h2></a>
                                <button onClick = {this.handleToggleProfile}  className="view-profile-button" value={this.props.id}>View Profile</button>
                            </div>

                            <h4> {this.props.profileDescription}</h4>
                            <div className ="langauge">
                                <p>{this.props.languages}</p>
                            </div>

                            <div ref={this.extraProfileInfoContainer} className = "hidden profile-sub-info">
                                <p> Asking Salary:£{this.props.salary} </p><br/>
                                <p> Location Base: {this.props.location} </p><br/>
                                <p> Role: {this.props.role} </p><br/>
                                <p>Speciality: {this.props.jobTitle}</p><br/>
                                <Fab color="secondary" aria-label="F" >
                                    <Icon>{Edit}</Icon>
                                </Fab>
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
