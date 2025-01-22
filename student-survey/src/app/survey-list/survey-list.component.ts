// Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
// Description: The SurveyListComponent displays a list of surveys and supports fetching, editing, and deleting them via SurveyService. It uses inline editing with validation and provides user-friendly actions like cancel and confirm delete.
import { Component, OnInit } from '@angular/core';
import { SurveyService, Survey } from '../survey.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Added FormsModule for ngModel
import { NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-survey-list',
  standalone: true,
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule ], // Include FormsModule
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];
  editingIndex: number | null = null;
  editingSurvey: Survey | null = null;


  constructor(private surveyService: SurveyService, private router: Router) {}

  ngOnInit(): void {
    this.fetchSurveys();
  }

  fetchSurveys(): void {
    this.surveyService.getSurveys().subscribe(
      (data) => {
        this.surveys = data;
      },
      (error) => {
        console.error('Error fetching surveys:', error);
      }
    );
  }

  onEdit(survey: Survey): void {
    this.router.navigate(['/survey-edit', survey.email]);
    
   // this.editingIndex = index;
    //this.editingSurvey = { ...survey }; // Make a copy of the survey to edit
    
  }

  onCancelEdit(): void {
    this.editingIndex = null;
    this.editingSurvey = null;
  }

  onSaveEdit(): void {
    if (this.editingSurvey && this.editingSurvey.email) {
      this.surveyService.updateSurvey(this.editingSurvey.email, this.editingSurvey).subscribe(
        (updatedSurvey) => {
          if (this.editingIndex !== null) {
            this.surveys[this.editingIndex] = updatedSurvey; // Update the survey in the array
          }
          this.onCancelEdit();
        },
        (error) => {
          console.error('Error updating survey:', error);
        }
      );
    }
  }

  onDelete(survey: Survey, index: number): void {
    if (confirm(`Are you sure you want to delete the survey by ${survey.firstName} ${survey.lastName}?`)) {
      this.surveyService.deleteSurvey(survey.email).subscribe(
        () => {
          this.surveys.splice(index, 1);
        },
        (error) => {
          console.error('Error deleting survey:', error);
        }
      );
    }
  }
}
