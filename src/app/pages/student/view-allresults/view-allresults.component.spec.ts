import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllresultsComponent } from './view-allresults.component';

describe('ViewAllresultsComponent', () => {
  let component: ViewAllresultsComponent;
  let fixture: ComponentFixture<ViewAllresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
