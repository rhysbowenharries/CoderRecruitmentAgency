package com.codeclan.example.coderProfiles.controllers;


import com.codeclan.example.coderProfiles.models.Profile;
import com.codeclan.example.coderProfiles.repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value= "/profiles")

public class ProfileControl {
    @Autowired
    ProfileRepository profileRepository;

    @GetMapping
    public List<Profile> getAllProfiles(){
        return profileRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Profile> getProfile(@PathVariable Long id){
        return profileRepository.findById(id);
    }
}
