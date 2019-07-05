// import React, { Component, Fragment } from "react";
// import FormComponent from "../components/FormComponent";
//
// class CreatePageContainer extends Component{
//
//     constructor(props){
//         super(props)
//         this.state = {
//
//             profiles: []
//         }
//         this.addProfile = this.addProfile.bind(this)
//     }
//
//     addProfile(newProfile) {
//         newProfile.id = this.state.profiles.length + 1
//         this.setState(prevState => {
//             return {profiles: [newProfile, ...prevState.profiles ]}
//         })
//     }
//
//     handleProfile(){
//         this.props.profileList({
//            profiles: this.state.profiles
//         })
//
//     }
//
//     render(){
//         return(
//             <Fragment>
//
//                     <FormComponent addProfile= {this.addProfile}/>
//
//             </Fragment>
//         )
//     }
//
// }
//
// export default CreatePageContainer;
