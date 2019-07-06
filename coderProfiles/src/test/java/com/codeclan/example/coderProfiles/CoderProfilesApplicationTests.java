package com.codeclan.example.coderProfiles;

import com.codeclan.example.coderProfiles.models.Profile;
import com.codeclan.example.coderProfiles.repositories.ProfileRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CoderProfilesApplicationTests {

	@Autowired
	ProfileRepository profileRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void createProfile(){
		Profile alex = new Profile("Alex", "Baz", "JavaScript");
		profileRepository.save(alex);
	}


}
