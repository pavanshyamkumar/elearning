import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllQuizesComponent } from './view-all-quizes.component';

describe('ViewAllQuizesComponent', () => {
  let component: ViewAllQuizesComponent;
  let fixture: ComponentFixture<ViewAllQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllQuizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
