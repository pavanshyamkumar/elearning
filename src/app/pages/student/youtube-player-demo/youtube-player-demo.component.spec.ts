import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayerDemoComponent } from './youtube-player-demo.component';

describe('YoutubePlayerDemoComponent', () => {
  let component: YoutubePlayerDemoComponent;
  let fixture: ComponentFixture<YoutubePlayerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubePlayerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
