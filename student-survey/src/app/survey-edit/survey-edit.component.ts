// Author: Mamatha Iruvaram 
// Description: It uses RouterModule for navigation and is linked to its own HTML and CSS files for layout and styling.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService, Survey } from '../survey.service';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Added FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SurveyFormComponent } from '../survey-form/survey-form.component';
import { SurveyListComponent } from '../survey-list/survey-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css'],
  imports: [
    CommonModule, // Required for *ngIf and *ngFor
    ReactiveFormsModule, // Required for form handling
  ],
})
export class SurveyEditComponent implements OnInit {
  surveyForm!: FormGroup;
  isLoading = true;
  likedMostOptions = ['Library', 'Sports', 'Dorm Rooms', 'Dining Hall', 'Other'];
  interestSourceOptions = ['Friend', 'Family', 'Website', 'Social Media', 'Other'];
  recommendationLikelihoodOptions = ['Very Likely', 'Somewhat Likely', 'Neutral', 'Unlikely'];

  constructor(
    private fb: FormBuilder,
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the FormGroup
    this.surveyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      surveyDate: ['', Validators.required],
      likedMost: [[]],
      interestSource: ['', Validators.required],
      recommendationLikelihood: ['', Validators.required],
      comments: ['']
    });

    // Fetch survey data based on email
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      this.surveyService.getSurvey(email).subscribe(
        (survey) => {
          if (survey) {
            this.surveyForm.patchValue(survey); // Prefill form values
          } else {
            console.error('Survey not found');
          }
          this.isLoading = false; // Stop loading
        },
        (error) => {
          console.error('Error fetching survey:', error);
          this.isLoading = false; // Stop loading even on error
        }
      );
    } else {
      console.error('No email provided in the route');
      this.isLoading = false; // Stop loading
    }
  }
    

  onSubmit(): void {
    if (this.surveyForm.valid) {
      console.log('Form submitted:', this.surveyForm.value); // Debugging log
      const email = this.surveyForm.value.email;
  
      this.surveyService.updateSurvey(email, this.surveyForm.value).subscribe(
        (response) => {
          console.log('Survey updated successfully:', response);
          // Navigate to the list table after successful save
          this.router.navigate(['/survey-list']);
        },
        (error) => {
          console.error('Error updating survey:', error);
          alert('Failed to save the survey. Please try again.');
        }
      );
    } else {
      console.error('Form is invalid');
      alert('Please fill out all required fields correctly.');
    }
  }
  

  onCancel(): void {
    this.router.navigate(['/survey-list']);
  }

  toggleLikedMost(option: string): void {
    const likedMost = this.surveyForm.get('likedMost')?.value || [];
    const index = likedMost.indexOf(option);

    if (index > -1) {
      likedMost.splice(index, 1);
    } else {
      likedMost.push(option);
    }

    this.surveyForm.get('likedMost')?.setValue(likedMost);
  }
}
