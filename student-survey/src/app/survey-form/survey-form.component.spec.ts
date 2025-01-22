// Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
// Description: This test suite verifies that the SurveyFormComponent is successfully created. It ensures the component initializes correctly after setup.
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormComponent } from './survey-form.component';

describe('SurveyFormComponent', () => {
  let component: SurveyFormComponent;
  let fixture: ComponentFixture<SurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
