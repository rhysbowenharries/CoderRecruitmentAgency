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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    public Programmer(String firstName, String lastName, String languages){
        this.firstName = firstName;
        this.lastName = lastName;
        this.languages = languages;
    }

    public Programmer() {
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
