import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewQuizesComponent } from './admin-view-quizes.component';

describe('AdminViewQuizesComponent', () => {
  let component: AdminViewQuizesComponent;
  let fixture: ComponentFixture<AdminViewQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewQuizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
