package com.codeclan.example.coderProfiles.models;

import javax.persistence.*;

@Entity
@Table(name="programmers")
public class Programmer {


    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "languages")
    private String languages;

    @Column(name = "profile_description")
    private String profileDescription;

    @Column(name = "role")
    private String role;

    @Column(name = "location")
    private String location;

    @Column(name = "salary")
    private String salary;

    @Column(name = "job_title")
    private String jobTitle;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    public Programmer(String firstName, String lastName, String languages, String profileDescription, String role, String location, String salary, String jobTitle){
        this.firstName = firstName;
        this.lastName = lastName;
        this.languages = languages;
        this.profileDescription = profileDescription;
        this.role = role;
        this.location = location;
        this.salary = salary;
        this.jobTitle = jobTitle;

    }

    public Programmer() {
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getProfileDescription() {
        return profileDescription;
    }

    public void setProfileDescription(String profileDescription) {
        this.profileDescription = profileDescription;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }
}
