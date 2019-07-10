package com.codeclan.example.coderProfiles.projections;

        import com.codeclan.example.coderProfiles.models.Programmer;
        import org.springframework.data.rest.core.config.Projection;

        import java.util.List;

@Projection(name= "embedLanguage", types = Programmer.class)
public interface EmbedLanguage {

    long getId();
    String getFirstName();
    String getLastName();
    String getJobTitle();
    String getSalary();
    String getLocation();
    String getRole();
    String getProfileDescription();
    List getLanguages();
}
