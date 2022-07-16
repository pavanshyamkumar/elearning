import { Component, OnInit,  AfterViewInit, ChangeDetectorRef,ElementRef, OnDestroy, ViewChild } from '@angular/core';
interface Video {
  id: string;
  name: string;
}


const VIDEOS: Video[] = [
  {
    id: 'PRQCAL_RMVo',
    name: 'Instructional',
  },
  {
    id: 'O0xx5SvjmnU',
    name: 'Angular Conf',
  },
  {
    id: 'invalidname',
    name: 'Invalid',
  },
];


@Component({
  selector: 'app-youtube-player-demo',
  templateUrl: './youtube-player-demo.component.html',
  styleUrls: ['./youtube-player-demo.component.css']
})
export class YoutubePlayerDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('demoYouTubePlayer')
  demoYouTubePlayer!: ElementRef<HTMLDivElement>;
  selectedVideo: Video | undefined = VIDEOS[0];
  videos = VIDEOS;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
}
