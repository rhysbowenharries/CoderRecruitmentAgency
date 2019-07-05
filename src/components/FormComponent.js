import React, { Component, Fragment } from "react";

class FormComponent extends Component{
    
    constructor(props){
        super(props)
        this.state = {
        
                
                id: 0,
                first_name: "",
                last_name: "",
                languages: "",
                profile_description: ""

        
        }
            this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
            this.handleLastNameChange = this.handleLastNameChange.bind(this)
            this.handleLanguageChange = this.handleLanguageChange.bind(this)
            this.handleProfileDescriptionChange = this.handleProfileDescriptionChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFirstNameChange(event){
        this.setState({first_name: event.target.value})
    }

    handleLastNameChange(event){
        this.setState({last_name: event.target.value})
    }

    handleLanguageChange(event){
        this.setState({languages: event.target.value})
    }

    handleProfileDescriptionChange(event){
        this.setState({profile_description: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.addProfile({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            languages: this.state.languages,
            profile_description: this.state.profile_description
        })
    }

    render(){
        return(

            <Fragment>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" placeholder="First name" onChange= {this.handleFirstNameChange}> 
                    </input>
                    <input type="text" placeholder="Last name" onChange= {this.handleLastNameChange}> 
                    </input>
                    <input type="text" placeholder="Languages" onChange= {this.handleLanguageChange}> 
                    </input>
                    <input type="text" placeholder="Profile Description" onChange= {this.handleProfileDescriptionChange}> 
                    </input>
                    <button type="submit"> Save Profile</button>
                </form>
            </Fragment>
        )
    }
} 

export default FormComponent