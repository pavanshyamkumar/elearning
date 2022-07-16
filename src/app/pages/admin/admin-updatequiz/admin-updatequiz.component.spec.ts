import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatequizComponent } from './admin-updatequiz.component';

describe('AdminUpdatequizComponent', () => {
  let component: AdminUpdatequizComponent;
  let fixture: ComponentFixture<AdminUpdatequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdatequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdatequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
