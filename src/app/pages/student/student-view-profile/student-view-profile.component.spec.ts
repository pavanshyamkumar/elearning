import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewProfileComponent } from './student-view-profile.component';

describe('StudentViewProfileComponent', () => {
  let component: StudentViewProfileComponent;
  let fixture: ComponentFixture<StudentViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
