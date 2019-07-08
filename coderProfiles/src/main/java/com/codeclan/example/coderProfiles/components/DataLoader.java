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
        Programmer john = new Programmer("John", "Harper", "Ruby");
        programmerRepository.save(john);

        Programmer alex= new Programmer("alex", "Bax", "JavaScript");
        programmerRepository.save(alex);

        Programmer katie= new Programmer("Katie", "J-dog", "Java");
        programmerRepository.save(katie);

        Programmer cruncher= new Programmer("Cruncher", "McKilldestroy", "C++");
        programmerRepository.save(cruncher);




    }
}
