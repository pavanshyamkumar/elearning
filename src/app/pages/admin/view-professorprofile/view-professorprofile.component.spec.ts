import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfessorprofileComponent } from './view-professorprofile.component';

describe('ViewProfessorprofileComponent', () => {
  let component: ViewProfessorprofileComponent;
  let fixture: ComponentFixture<ViewProfessorprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfessorprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfessorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
