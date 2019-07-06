package com.codeclan.example.coderProfiles.repositories;

import com.codeclan.example.coderProfiles.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {


}
