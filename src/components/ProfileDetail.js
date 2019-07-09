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
        this.handleButtonSelection = this.handleButtonSelection.bind(this)
    }

    handleButtonSelection = (event) =>{
        this.setState({toProfileList: true})
    }

    render(){
        // if(this.state.toProfileList){
        //
        //         return<Redirect to={
        //             path:`/start_hire/${this.props.id}`,
        //             state: {this.props}
        //             }/>
        // }else{
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
                                    <button onClick = {this.handleButtonSelection}  className="view-profile-button" value={this.props.id}>View Profile</button>
                                </div>
                                <div className = "profile-sub-info">
                                    <p> Asking Salary:£24000 </p>
                                    <p> Location Base: Edinburgh </p>
                                    <p> Role: Permanent </p>
                                </div>
                                <h4> {this.props.profileDescription}</h4>
                                    <div className ="langauge">
                                        <p>{this.props.languages}</p>
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
