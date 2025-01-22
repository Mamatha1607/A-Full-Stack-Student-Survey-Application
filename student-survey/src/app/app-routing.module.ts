// Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
//Description: This Angular AppRoutingModule defines and manages the application's routing configuration. It maps specific paths ('home', 'survey', 'surveys') to their respective components and sets a default route that redirects to the SurveyFormComponent when the root path ('') is accessed. It uses RouterModule.forRoot() to register the routes and exports RouterModule for use in other modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component'


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'surveys', component: SurveyListComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // Default route
  { path: 'survey-edit/:email', component: SurveyEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
