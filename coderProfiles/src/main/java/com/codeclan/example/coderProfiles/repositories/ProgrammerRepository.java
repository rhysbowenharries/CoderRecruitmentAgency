package com.codeclan.example.coderProfiles.repositories;

import com.codeclan.example.coderProfiles.models.Programmer;
import com.codeclan.example.coderProfiles.projections.EmbedLanguage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(excerptProjection = EmbedLanguage.class)
public interface ProgrammerRepository extends JpaRepository<Programmer, Long> {


}
