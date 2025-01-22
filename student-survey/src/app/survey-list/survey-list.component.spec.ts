// Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
// Description: This code is a unit test suite for the SurveyListComponent in Angular. It ensures that the component is created successfully by checking if its instance is truthy after initialization.
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListComponent } from './survey-list.component';

describe('SurveyListComponent', () => {
  let component: SurveyListComponent;
  let fixture: ComponentFixture<SurveyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
