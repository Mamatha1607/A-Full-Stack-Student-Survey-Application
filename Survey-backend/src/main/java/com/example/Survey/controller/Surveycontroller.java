
// Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
// Description: The SurveyController is a Spring Boot REST API that allows for creating, updating, deleting, and retrieving surveys. It uses a SurveyRepository for database interactions and supports CORS for communication with a frontend running on http://localhost:4200.
package com.example.Survey.controller;

import com.example.Survey.model.Survey;
import com.example.Survey.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/surveys")
public class Surveycontroller {

    @Autowired
    private SurveyRepository surveyRepository;

    // Get all surveys
    @GetMapping
    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }
    @GetMapping("/{email}")
    public Optional<Survey> getSurveyByEmail(@PathVariable String email) {
        return surveyRepository.findById(email);
    }
    // Create a new survey
    @PostMapping
    public Survey createSurvey(@RequestBody Survey survey) {
        try {
            System.out.println("Received Survey: " + survey);
            return surveyRepository.save(survey);
        } catch (Exception e) {
            System.err.println("Error saving survey: " + e.getMessage());
            throw new RuntimeException("Failed to save survey");
        }
    }

    // Update an existing survey by email (primary key)
    @PutMapping("/{email}")
    public Survey updateSurvey(@PathVariable String email, @RequestBody Survey survey) {
        Optional<Survey> existingSurvey = surveyRepository.findById(email);
        if (existingSurvey.isPresent()) {
            // Ensure the email remains unchanged
            survey.setEmail(email);
            return surveyRepository.save(survey);
        } else {
            throw new RuntimeException("Survey with email " + email + " not found");
        }
    }

    // Delete a survey by email
    @DeleteMapping("/{email}")
    public void deleteSurvey(@PathVariable String email) {
        surveyRepository.deleteById(email);
    }
}
