import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultQuizesComponent } from './view-result-quizes.component';

describe('ViewResultQuizesComponent', () => {
  let component: ViewResultQuizesComponent;
  let fixture: ComponentFixture<ViewResultQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResultQuizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResultQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
