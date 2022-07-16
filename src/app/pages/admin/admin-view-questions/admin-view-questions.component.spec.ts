import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewQuestionsComponent } from './admin-view-questions.component';

describe('AdminViewQuestionsComponent', () => {
  let component: AdminViewQuestionsComponent;
  let fixture: ComponentFixture<AdminViewQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
