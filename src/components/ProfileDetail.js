import React,{Component, Fragment} from 'react'
import "./ProfileDetail.css"
import profileimage from "./ppl.jpg"
import placeholder from "./placeholder.png"
import ProfileIndividual from "../containers/ProfileIndividual"
import {Redirect} from 'react-router-dom';



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
        if(extraProfileInfoContainer.classList.contains('hidden')){
            extraProfileInfoContainer.classList.remove('hidden')
        } else {
            extraProfileInfoContainer.classList.add('hidden')
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
                                <p> Asking Salary:£{this.props.salary} </p>
                                <p> Location Base: {this.props.location} </p>
                                <p> Role: {this.props.role} </p>
                                <p>Speciality: {this.props.jobTitle}</p>
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
