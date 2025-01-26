// Author: Mamatha Iruvaram 
// Description: This Angular test suite verifies the component functionality. It initializes the component, ensures proper compilation, and includes a test case to confirm the component's successful creation.
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEditComponent } from './survey-edit.component';

describe('SurveyEditComponent', () => {
  let component: SurveyEditComponent;
  let fixture: ComponentFixture<SurveyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
