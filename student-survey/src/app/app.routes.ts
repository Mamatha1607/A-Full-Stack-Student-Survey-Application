// Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
//Description: This Angular AppRoutingModule defines and manages the application's routing configuration. It maps specific paths ('home', 'survey', 'surveys') to their respective components and sets a default route that redirects to the SurveyFormComponent when the root path ('') is accessed. It uses RouterModule.forRoot() to register the routes and exports RouterModule for use in other modules
import { Routes } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component'

export const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'survey-form', component: SurveyFormComponent },
  { path: 'survey-list', component: SurveyListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'survey-edit/:email', component: SurveyEditComponent },
];
