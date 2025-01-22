// Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
// Description: The SurveyRepository interface extends JpaRepository for CRUD operations on the Survey entity, using email (a String) as the primary key. No additional methods are required as JpaRepository provides default implementations for common operations.
package com.example.Survey.repository;

import com.example.Survey.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyRepository extends JpaRepository<Survey, String> {
    // No additional methods needed; JpaRepository provides CRUD operations
}
