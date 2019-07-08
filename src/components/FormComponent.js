import React, { Component, Fragment } from "react";
import "./FormComponent.css"

class FormComponent extends Component{

    constructor(props){
        super(props)
        this.state = {


                id: 0,
                firstName: "",
                lastName: "",
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
        this.setState({firstName: event.target.value})
    }

    handleLastNameChange(event){
        this.setState({lastName: event.target.value})
    }

    handleLanguageChange(event){
        this.setState({languages: event.target.value})
    }

    handleProfileDescriptionChange(event){
        this.setState({profileDescription: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.addProfile({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            languages: this.state.languages,
            profile_description: this.state.profileDescription
        })
    }

    render(){
        return(
            <Fragment>
            <h1 className = "form-header"> Fundamentals </h1>
            <div className = "form-container">
                <div className = "form">
                <form className="form-items" onSubmit = {this.handleSubmit}>
                    <p> All fields are required unless otherwise stated. </p><br/><br/>
                    <label for="first_name">What is your first name?</label><br/><br/>
                    <input id="first_name" type="text" placeholder="First name" onChange= {this.handleFirstNameChange}>
                    </input>
                    <br/>
                    <label for="last_name">What is your last name?</label><br/><br/>
                    <input  id="last_name" type="text" placeholder="Last name" onChange= {this.handleLastNameChange}>
                    </input>
                    <br/>
                    <label for="profession">What is your job title?</label><br/><br/>
                    <select  id="last_name" placeholder="Last name">
                        <option value = "Software Engineer"> Software Engineer </option>
                        <option value = "Engineer Management"> Engineer Management </option>
                        <option value = "UX"> Software Engineer </option>
                        <option value = "Product Manager"> Product Manager </option>
                        <option value = "Front-end Developer"> Front-end Developer </option>
                        <option value = "Mobile App Engineer"> Mobile App Engineer </option>
                    </select>
                    <br/>
                    <label for="language">What languages do you know?</label><br/><br/>
                    <input  id="language" type="text" placeholder="Languages" onChange= {this.handleLanguageChange}>
                    </input>
                    <br/>
                    <label for="profile">Tell us a little about yourself.</label><br/><br/>
                    <textarea id="profile" placeholder="Profile Description" onChange= {this.handleProfileDescriptionChange}>
                    </textarea>
                    <br/>
                    <button type="submit"> Save Profile</button>
                </form>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default FormComponent
