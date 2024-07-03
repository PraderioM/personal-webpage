import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicJobsAndEducationComponent } from './academic-jobs-and-education.component';

describe('AcademicJobsAndEducationComponent', () => {
  let component: AcademicJobsAndEducationComponent;
  let fixture: ComponentFixture<AcademicJobsAndEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicJobsAndEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicJobsAndEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
