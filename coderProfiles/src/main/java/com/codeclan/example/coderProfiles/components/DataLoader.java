package com.codeclan.example.coderProfiles.components;

import com.codeclan.example.coderProfiles.models.Language;
import com.codeclan.example.coderProfiles.models.Programmer;
import com.codeclan.example.coderProfiles.repositories.LanguageRepository;
import com.codeclan.example.coderProfiles.repositories.ProgrammerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ProgrammerRepository programmerRepository;

    @Autowired
    LanguageRepository languageRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){
        Programmer john = new Programmer("John", "Harper",  "I am a Ginger Jedi", "permanent", "Endor", "30,000", "Software Engineer");
        programmerRepository.save(john);

        Programmer alex= new Programmer("alex", "Bax", "One way to find out", "temporary", "Gotham City", "29,000", "Software Engineer");
        programmerRepository.save(alex);

        Programmer katie= new Programmer("Katie", "J-dog", "I will fight you!", "permanent", "Berlin", "52,000", "Software Engineer");
        programmerRepository.save(katie);

        Programmer cruncher= new Programmer("Cruncher", "McKilldestroy", "I am a giant, but I now eat Snozcumbers", "temporary", "Mallorca", "7000", "UX Designer");
        programmerRepository.save(cruncher);

        Language ruby = new Language ("Ruby");
        languageRepository.save(ruby);

        Language java = new Language("Java");
        languageRepository.save(java);

        Language cSharp = new Language("C#");
        languageRepository.save(cSharp);

        Language javaScript = new Language("JavaScript");
        languageRepository.save(javaScript);

        cruncher.addLanguage(ruby);
        programmerRepository.save(cruncher);

        katie.addLanguage(ruby);
        programmerRepository.save(katie);

        alex.addLanguage(javaScript);
        programmerRepository.save(alex);

        john.addLanguage(cSharp);
        programmerRepository.save(john);


    }
}
