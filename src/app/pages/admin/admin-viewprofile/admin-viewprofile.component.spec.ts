import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewprofileComponent } from './admin-viewprofile.component';

describe('AdminViewprofileComponent', () => {
  let component: AdminViewprofileComponent;
  let fixture: ComponentFixture<AdminViewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
