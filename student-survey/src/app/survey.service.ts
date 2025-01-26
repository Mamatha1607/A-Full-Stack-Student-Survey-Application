// Author: Mamatha Iruvaram 
// Description: This Angular service (SurveyService) interacts with a backend API to manage survey data. It provides methods to fetch, create, update, and delete surveys, using the HttpClient module to perform HTTP requests.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms'; 

export interface Survey {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string; // Primary key in the backend
  surveyDate: string;
  likedMost: string;
  interestSource: string;
  recommendationLikelihood: string;
  comments: string;
}

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private apiUrl = 'http://localhost:8080/api/surveys';

  constructor(private http: HttpClient) {}

  // Fetch all surveys
  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.apiUrl);
  }

  // Create a new survey
  createSurvey(survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(this.apiUrl, survey);
  }

  // Update an existing survey by email
  updateSurvey(email: string, survey: Survey): Observable<Survey> {
    return this.http.put<Survey>(`${this.apiUrl}/${email}`, survey);
  }
  getSurvey(email: string): Observable<Survey> {
    return this.http.get<Survey>(`${this.apiUrl}/${email}`);
  }
  

  // Delete a survey by email
  deleteSurvey(email: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${email}`);
  }
}
