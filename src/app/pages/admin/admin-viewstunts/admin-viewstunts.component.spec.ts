import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewstuntsComponent } from './admin-viewstunts.component';

describe('AdminViewstuntsComponent', () => {
  let component: AdminViewstuntsComponent;
  let fixture: ComponentFixture<AdminViewstuntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewstuntsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewstuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
