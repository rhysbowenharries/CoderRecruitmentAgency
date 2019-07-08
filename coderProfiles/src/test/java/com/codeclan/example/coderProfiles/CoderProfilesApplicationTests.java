package com.codeclan.example.coderProfiles;

import com.codeclan.example.coderProfiles.models.Programmer;
import com.codeclan.example.coderProfiles.repositories.ProgrammerRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CoderProfilesApplicationTests {

	@Autowired
	ProgrammerRepository programmerRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void createProfile(){
		Programmer alex = new Programmer("Alex", "Baz", "JavaScript", "hi");
		programmerRepository.save(alex);
	}


}
