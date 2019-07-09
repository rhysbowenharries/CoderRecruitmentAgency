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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    public Programmer(String firstName, String lastName, String languages, String profileDescription){
        this.firstName = firstName;
        this.lastName = lastName;
        this.languages = languages;
        this.profileDescription = profileDescription;
    }

    public Programmer() {
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
