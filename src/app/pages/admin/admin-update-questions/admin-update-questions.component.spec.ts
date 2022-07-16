import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateQuestionsComponent } from './admin-update-questions.component';

describe('AdminUpdateQuestionsComponent', () => {
  let component: AdminUpdateQuestionsComponent;
  let fixture: ComponentFixture<AdminUpdateQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
