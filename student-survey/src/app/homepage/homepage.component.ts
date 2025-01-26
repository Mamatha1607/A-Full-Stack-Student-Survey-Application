// Author: Mamatha Iruvaram
// Description: It uses RouterModule for navigation and is linked to its own HTML and CSS files for layout and styling.
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { SurveyFormComponent } from './survey-form/survey-form.component';
//import { SurveyListComponent } from './survey-list/survey-list.component';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {

}
