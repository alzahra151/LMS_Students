import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Player from '@vimeo/player';
@Component({
  selector: 'app-displayvideo',
  templateUrl: './displayvideo.component.html',
  styleUrls: ['./displayvideo.component.scss']
})
export class DisplayvideoComponent {
  @ViewChild('vimeoContainer', { static: true }) vimeoContainer!: ElementRef;
  videoUrl: string | undefined = '';

  private player!: Player;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params) {
        this.videoUrl = params['video_url'];
        console.log('url parameter:', this.videoUrl);
      }
    })
  }
  ngAfterViewInit() {
    this.player = new Player(this.vimeoContainer.nativeElement, {
      url: "https://vimeo.com/965280460",

      // width: 800,
      autoplay: true,
      // : false, // Hide the user's byline
      portrait: false, // Hide the user's portrait
      byline: false
    });

    this.player.on('play', () => {
      console.log('Played the video');
    });
  }
}
