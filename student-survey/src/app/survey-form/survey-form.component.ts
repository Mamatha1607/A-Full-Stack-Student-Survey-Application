//Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
//Description:This Angular component implements a dynamic survey form with validation using ReactiveFormsModule. It handles form submission, resets, and HTTP integration for survey data storage.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SurveyService } from '../survey.service';


interface SurveyData {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string;
  surveyDate: string;
  likedMost: string[];
  interestSource: string;
  recommendationLikelihood: string;
  comments?: string;
}

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent {
  surveyForm: FormGroup;
  likedMostOptions: string[] = ['Campus Life', 'Academics', 'Facilities', 'Location'];
  interestSourceOptions: string[] = ['Friends', 'Online Research', 'University Events', 'Other'];
  recommendationLikelihoodOptions: string[] = ['Very Likely', 'Likely', 'Unlikely', 'Very Unlikely'];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.surveyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      surveyDate: ['', Validators.required],
      likedMost: this.fb.array([], Validators.required),
      interestSource: ['', Validators.required],
      recommendationLikelihood: ['', Validators.required],
      comments: [''],
    });
  }

  toggleLikedMost(option: string): void {
    const likedMostArray = this.surveyForm.get('likedMost') as FormArray;
    const index = likedMostArray.value.indexOf(option);
    if (index >= 0) {
      likedMostArray.removeAt(index);
    } else {
      likedMostArray.push(this.fb.control(option));
    }
  }

  onSubmit() {
    if (this.surveyForm.valid) {
      const surveyData = this.surveyForm.value;
      console.log('Form Submitted:', surveyData);

      // Send the data to the server
      this.http.post('http://localhost:8080/api/surveys', surveyData).subscribe(
        (response) => {
          console.log('Survey submitted successfully:', response);
          alert('Form Submitted Successfully!');
          this.resetForm(); // Reset form after successful submission
        },
        (error) => {
          console.error('Error submitting survey:', error);
          alert('There was an error submitting your survey. Please try again.');
        }
      );
    } else {
      console.log('Form Invalid:', this.surveyForm);
      alert('Please fill in all required fields correctly.');
    }
  }

  resetForm(): void {
    this.surveyForm.reset();
    (this.surveyForm.get('likedMost') as FormArray).clear();
    console.log('Form has been reset');
  }

  onCancel(): void {
    this.resetForm();
  }
}
