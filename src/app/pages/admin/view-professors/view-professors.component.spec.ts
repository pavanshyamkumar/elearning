import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfessorsComponent } from './view-professors.component';

describe('ViewProfessorsComponent', () => {
  let component: ViewProfessorsComponent;
  let fixture: ComponentFixture<ViewProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
