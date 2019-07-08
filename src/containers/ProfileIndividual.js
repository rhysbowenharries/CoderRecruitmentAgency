import React, { Component, Fragment } from "react";


class ProfileIndividual extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <h1>{this.props.profile.first_name}</h1>
        )
    }


}

export default ProfileIndividual
