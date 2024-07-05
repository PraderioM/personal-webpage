import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDIComponent } from './edi.component';

describe('EDIComponent', () => {
  let component: EDIComponent;
  let fixture: ComponentFixture<EDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
