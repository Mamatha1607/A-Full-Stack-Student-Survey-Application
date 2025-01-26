// Author: Mamatha Iruvaram 
//Description: This Angular component (AppComponent) is a standalone component that serves as the root component of the application. It includes routing functionality through the RouterModule and provides the necessary setup to display views defined in the routing configuration (using <router-outlet>). The title property is set to 'Student Survey App', which could be used in the component's template. Additionally, components like SurveyFormComponent and SurveyListComponent are commented out, but they could be imported to be used within the application.
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // For routing
//import { SurveyFormComponent } from './survey-form/survey-form.component'; // Import child components
//import { SurveyListComponent } from './survey-list/survey-list.component'; // Import child components

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule, // For router-outlet
   // SurveyFormComponent, // Import the Survey Form component
    //SurveyListComponent, // Import the Survey List component
  ],
})
export class AppComponent {
  title = 'Student Survey App';
}
