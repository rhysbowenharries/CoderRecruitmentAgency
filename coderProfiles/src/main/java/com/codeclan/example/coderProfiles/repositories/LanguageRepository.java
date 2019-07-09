package com.codeclan.example.coderProfiles.repositories;

import com.codeclan.example.coderProfiles.models.Language;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LanguageRepository extends JpaRepository<Language, Long> {
}
