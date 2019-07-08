import React, { Component, Fragment } from "react";
import "./FormComponent.css"

class FormComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
                id: 0,
                first_name: "",
                last_name: "",
                location: "",
                languages: "",
                askingSalary: null,
                roleType: '',
                profile_description: "",
                jobTitle:""


        }
            this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
            this.handleLastNameChange = this.handleLastNameChange.bind(this)
            this.handleLanguageChange = this.handleLanguageChange.bind(this)
            this.handleLocationChange = this.handleLocationChange.bind(this)
            this.handleProfileDescriptionChange = this.handleProfileDescriptionChange.bind(this)
            this.handleJobTitleChange = this.handleJobTitleChange.bind(this)
            this.handleSalaryChange = this.handleSalaryChange.bind(this)
            this.handleRoleChange = this.handleRoleChange.bind(this)
    }

    handleFirstNameChange(event){
        this.setState({first_name: event.target.value})
    }

    handleLastNameChange(event){
        this.setState({last_name: event.target.value})
    }

    handleLocationChange(event){
        this.setState({location: event.target.value})
    }

    handleLanguageChange(event){
        this.setState({languages: event.target.value})
    }

    handleProfileDescriptionChange(event){
        this.setState({profile_description: event.target.value})
    }

    handleRoleChange(event){
        this.setState({roleType: event.target.value})
    }

    handleSalaryChange(event){
        this.setState({askingSalary: event.target.value})
    }

    handleJobTitleChange(event){
        this.setState({jobTitle: event.target.value})
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
                    <label for="location">Where would you like to work?</label><br/><br/>
                    <input  id="location" type="text" placeholder="Location" onChange= {this.handleLocationChange}>
                    </input>
                    <br/>
                    <label for="role">What role would you like(Permanant/Contract)?</label><br/><br/>
                    <select  onChange= {this.handleRoleChange} id="role" placeholder="" className="select">
                        <option value = "Permanant"> Permanant </option>
                        <option value = "Contract"> Contract </option>
                    </select>
                    <br/>
                    <label for="salary">Where would you like to work?</label><br/><br/>
                    <input  id="salary" type="text" placeholder="Salary" onChange= {this.handleSalaryChange}>
                    </input>
                    <br/>

                    <label for="profession">What is your job title?</label><br/><br/>
                    <select  onChange= {this.handleJobTitleChange} id="last_name" placeholder="Last name" className="select">
                        <option value = "Software Engineer"> Software Engineer </option>
                        <option value = "Engineer Management"> Engineer Management </option>
                        <option value = "UX"> UX Designer </option>
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
