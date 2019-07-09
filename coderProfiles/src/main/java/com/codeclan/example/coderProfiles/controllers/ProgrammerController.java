package com.codeclan.example.coderProfiles.controllers;


import com.codeclan.example.coderProfiles.models.Programmer;
import com.codeclan.example.coderProfiles.repositories.ProgrammerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin
@RequestMapping(value= "/programmers")
public class ProgrammerController {
    @Autowired
    ProgrammerRepository programmerRepository;

    @GetMapping
    public List<Programmer> getAllProfiles(){
        return programmerRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Programmer> getProfile(@PathVariable Long id){
        return programmerRepository.findById(id);
    }
}
