// Author:Mamatha Iruvaram 
// Description: This Angular module (AppModule) sets up the foundational structure of the application. It imports essential modules for browser compatibility, form handling, HTTP services, and routing. Additionally, it declares the application components and configures the HTTP client for API interactions. The bootstrapApplication function is used to bootstrap the AppComponent as the root component of the application.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Provides *ngFor, *ngIf, etc.
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // For forms
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component'; // Use './' to indicate the current directory
//import { AppRoutingModule } from './app-routing.module'; // For routing
import { SurveyFormComponent } from './survey-form/survey-form.component'; // Survey form component
import { SurveyListComponent } from './survey-list/survey-list.component'; // Survey list component
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';



@NgModule({
  imports: [
    AppComponent,
    SurveyFormComponent,
    SurveyListComponent,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomepageComponent,
    SurveyEditComponent,
    
  ],
  providers: [
    provideHttpClient(), 
  ],
})
export class AppModule {}

// In your main.ts or similar entry file
import { bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent);
