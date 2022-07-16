import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcompComponent } from './studentcomp.component';

describe('StudentcompComponent', () => {
  let component: StudentcompComponent;
  let fixture: ComponentFixture<StudentcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
