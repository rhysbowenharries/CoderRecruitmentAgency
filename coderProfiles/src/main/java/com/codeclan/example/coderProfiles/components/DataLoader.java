package com.codeclan.example.coderProfiles.components;

import com.codeclan.example.coderProfiles.models.Profile;
import com.codeclan.example.coderProfiles.repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ProfileRepository profileRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){
        Profile john = new Profile("John", "Harper", "Ruby");
        profileRepository.save(john);

        Profile alex= new Profile("alex", "Bax", "JavaScript");
        profileRepository.save(alex);

        Profile katie= new Profile("Katie", "J-dog", "Java");
        profileRepository.save(katie);

        Profile cruncher= new Profile("Cruncher", "McKilldestroy", "C++");
        profileRepository.save(cruncher);




    }
}
