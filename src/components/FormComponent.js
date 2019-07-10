import React, { Component, Fragment } from "react";
import "./FormComponent.css"
import { Redirect } from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from './checkBoxes'

import Select from '@material-ui/core/Select';


class FormComponent extends Component{

    constructor(props){
        super(props)



        if (props.profileData){
            const profileData = JSON.parse(props.profileData)
            const salary  = parseInt(profileData.salary, 10 )
            this.state = {
                id:profileData.id,
                firstName: profileData.first_name,
                lastName: profileData.last_name,
                location: profileData.location,
                languages:profileData.languages,
                salary:salary,
                role: profileData.role,
                profileDescription: profileData.profileDescription,
                jobTitle:profileData.jobTitle,
                toProfileList: false
            }
        }else{
            this.state = {
                firstName: "",
                lastName: "",
                location: "",
                languages:"",
                salary: null,
                role: "",
                profileDescription: "",
                jobTitle:"",

                toProfileList: false,
                // personName:[],
                // setPersonName: []

            }}





            this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
            this.handleLastNameChange = this.handleLastNameChange.bind(this)
            this.handleLanguageChange = this.handleLanguageChange.bind(this)
            this.handleLocationChange = this.handleLocationChange.bind(this)
            this.handleProfileDescriptionChange = this.handleProfileDescriptionChange.bind(this)
            this.handleJobTitleChange = this.handleJobTitleChange.bind(this)
            this.handleSalaryChange = this.handleSalaryChange.bind(this)
            this.handleRoleChange = this.handleRoleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            // this.handleChange = this.handleChange.bind(this)


            // this.names = [
            //     {url: 'www.bbc.com',
            //     name: 'bbc'},
            //     {url: 'www.cnn.com',
            //     name: 'cnn'},
            // ];
            //
            // this.MenuProps = {
            //     PaperProps: {
            //         style: {
            //             // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            //             width: 250,
            //         },
            //     },
            // };


        }

        handleFirstNameChange(event){
            this.setState({firstName: event.target.value})
        }

        handleLastNameChange(event){
            this.setState({lastName: event.target.value})
        }

        handleLocationChange(event){
            this.setState({location: event.target.value})
        }

        handleLanguageChange(event){
            this.setState({languages: event.target.value})
        }

        handleProfileDescriptionChange(event){
            this.setState({profileDescription: event.target.value})
        }

        handleRoleChange(event){
            this.setState({role: event.target.value})
        }

        handleSalaryChange(event){
            this.setState({salary: event.target.value})
        }

        handleJobTitleChange(event){
            this.setState({jobTitle: event.target.value})
        }

        handleSubmit(event){
            event.preventDefault()
            this.props.callBack({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                languages: this.state.languages,
                profileDescription: this.state.profileDescription,
                location: this.state.location,
                salary: this.state.salary,
                jobTitle: this.state.jobTitle,
                role: this.state.role
            });
            this.setState({ toProfileList: true });
        }


        // handleChange(event) {
        //     this.setState(prevState => {
        //         return {setPersonName: [...prevState.setPersonName, event.target.value]}
        //     })
        // };
        //
        // handleChangeMultiple(event) {
        //     const { options } = event.target;
        //     const value = {};
        //
        //     for (let i = 0, l = options.length; i < l; i += 1) {
        //         if (options[i].selected) {
        //             value['name'] = options[i].value;
        //         }
        //     }
        //     this.setState({setPersonName: value});
        // }








        render(){
            if (this.state.toProfileList) {
                return <Redirect to='/start_hire' />
            } else {
                return(
                    <Fragment>
                        <h1 className = "form-header"> Fundamentals </h1>
                        <div className = "form-container">
                            <div className = "form">
                                <form className="form-items" onSubmit = {this.handleSubmit}>
                                    <p> All fields are required unless otherwise stated. </p><br/><br/>
                                    <label htmlFor="first_name">What is your first name?</label><br/><br/>
                                    <input id="first_name" type="text" value={this.state.firstName} placeholder="First name" onChange= {this.handleFirstNameChange}>
                                    </input>



                                    {/* <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
                                    <Select
                                    multiple
                                    value={this.state.personName}
                                    onChange={this.handleChange}
                                    input={<Input id="select-multiple-checkbox" />}
                                    renderValue={selected => selected.join(', ')}
                                    >
                                    {this.names.map(name => (
                                    <MenuItem key={name} value={name.url}>
                                    <Checkbox checked={this.state.personName.indexOf(name) > -1} />
                                    <ListItemText primary={name.name} />
                                </MenuItem>
                            ))}
                        </Select> */}





                        <br/>
                        <label htmlFor="last_name">What is your last name?</label><br/><br/>
                        <input  id="last_name" type="text"  value={this.state.lastName} placeholder="Last name" onChange= {this.handleLastNameChange}>
                        </input>
                        <br/>
                        <label htmlFor="location">Where would you like to work?</label><br/><br/>
                        <input  id="location" type="text" placeholder="Location" value={this.state.location}  onChange= {this.handleLocationChange}>
                        </input>
                        <br/>
                        <label htmlFor="role">What role would you like(Permanant/Contract)?</label><br/><br/>
                        <select  onChange= {this.handleRoleChange} id="role" placeholder="" className="select" required value={this.state.role}>
                            <option disabled value = ""> Select Role Type </option>
                            <option value = "Permanant"> Permanant </option>
                            <option value = "Contract"> Contract </option>
                        </select>
                        <br/>
                        <label htmlFor="salary">Ideal salary</label><br/><br/>
                        <input  id="salary" type="number" placeholder="Salary" value={this.state.salary}  onChange= {this.handleSalaryChange}>
                        </input>
                        <br/>

                        <label htmlFor="profession">What is your job title?</label><br/><br/>
                        <select  onChange= {this.handleJobTitleChange} id="profession" required  value={this.state.jobTitle} className="select">
                            <option disabled value = "nah"> Select Job Title </option>
                            <option value = "Software Engineer"> Software Engineer </option>
                            <option value = "Engineer Management"> Engineer Management </option>
                            <option value = "UX"> UX Designer </option>
                            <option value = "Product Manager"> Product Manager </option>
                            <option value = "Front-end Developer"> Front-end Developer </option>
                            <option value = "Mobile App Engineer"> Mobile App Engineer </option>
                        </select>
                        <br/>
                        <label htmlFor="language">What languages do you know?</label><br/><br/>
                        <Checkbox/>

                        <br/>
                        <label htmlFor="profile">Tell us a little about yourself.</label><br/><br/>
                        <textarea id="profile" placeholder="Profile Description" value={this.state.profileDescription}  onChange= {this.handleProfileDescriptionChange}>
                        </textarea>
                        <br/>
                        <button type="submit">{this.props.mode === "UPDATE" ? "Update" : "Save" } Profile</button>
                    </form>

                </div>
            </div>
        </Fragment>
    )}
}
}

export default FormComponent
