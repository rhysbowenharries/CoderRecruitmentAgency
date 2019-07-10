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

                        <img src={profileimage} alt="Italian Trulli" className="profile"></img>
                    </div>

                    <div className = "left-container">
                        <li>
                            <div className = "profile-header-info">
                                <a><h2><strong>{this.props.first_name} {this.props.last_name}</strong> - Software Engineer</h2></a>
                                <button onClick = {this.handleToggleProfile}  className="profile-button" value={this.props.id}>View Profile</button>
                            </div>


                            <div className ="langauge">
                                <p>{this.props.languages}</p>
                            </div>

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
                                <h4> {this.props.profileDescription}</h4>
                                <div className ="langauge">
                                    <p>{this.props.languages[0].name}</p>
                                </div>
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
