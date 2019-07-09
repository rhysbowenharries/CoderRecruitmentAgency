package com.codeclan.example.coderProfiles.components;

import com.codeclan.example.coderProfiles.models.Programmer;
import com.codeclan.example.coderProfiles.repositories.ProgrammerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ProgrammerRepository programmerRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){
        Programmer john = new Programmer("John", "Harper", "Ruby", "I am a Ginger Jedi", "permanent", "Endor", "30,000", "Software Engineer");
        programmerRepository.save(john);

        Programmer alex= new Programmer("alex", "Bax", "JavaScript", "One way to find out", "temporary", "Gotham City", "29,000", "Software Engineer");
        programmerRepository.save(alex);

        Programmer katie= new Programmer("Katie", "J-dog", "Java", "I will fight you!", "permanent", "Berlin", "52,000", "Software Engineer");
        programmerRepository.save(katie);

        Programmer cruncher= new Programmer("Cruncher", "McKilldestroy", "C++", "I am a giant, but I now eat Snozcumbers", "temporary", "Mallorca", "7000", "UX Designer");
        programmerRepository.save(cruncher);




    }
}
