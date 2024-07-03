import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksAndConferencesComponent } from './talks-and-conferences.component';

describe('TalksAndConferencesComponent', () => {
  let component: TalksAndConferencesComponent;
  let fixture: ComponentFixture<TalksAndConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalksAndConferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalksAndConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
