import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Player from '@vimeo/player';
import { Comment } from 'src/app/models/comment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-popupvideo',
  templateUrl: './popupvideo.component.html',
  styleUrls: ['./popupvideo.component.scss'],
  providers: [MatSnackBar],
  encapsulation: ViewEncapsulation.None
})
export class PopupvideoComponent implements OnInit {

  @ViewChild('vimeoContainer', { static: true }) vimeoContainer!: ElementRef;
  videoUrl: string | undefined = '';
  comments: Comment[] = []
  private player!: Player;
  commentData: Comment = {}
  replayData: Comment = {}
  showReplayInput!: number
  constructor(private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commentSrvice: CommentService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    console.log('Received data:', this.data);
    this.commentData = {
      body: '',
      lesson_id: this.data.lessonId,
    };
    this.replayData = {
      body: '',
      lesson_id: this.data.lessonId,
    };
  }
  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   if (params) {
    //     this.videoUrl = params['video_url'];
    //     console.log('url parameter:', this.videoUrl);
    //   }
    // })
  }
  ngAfterViewInit() {
    this.player = new Player(this.vimeoContainer.nativeElement, {
      url: this.data.videoUrl,
      // width: 100,
      // height: 500,
      autoplay: false,
      // : false, // Hide the user's byline
      portrait: false, // Hide the user's portrait
      byline: false
    });

    this.player.on('play', () => {
      console.log('Played the video');
    });
    this.getComments()
  }
  getComments() {
    this.commentSrvice.getComments(this.data.lessonId).subscribe({
      next: (respnse) => {
        this.comments = respnse.result.comments
        console.log(this.comments)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  addComment() {
    if (true) {
      this.commentSrvice.addComment(this.commentData).subscribe({
        next: (respnse) => {
          this.getComments()
          this.commentData.body = ''
        },
        error: (error) => {
          console.log(error)
        }
      })
    } else {
      // this.router.navigate(['/login'])
      this.showSuccess('يجب تسجيل الدخول اولا ')
    }
  }
  addreplay(commentId: any) {
    this.commentSrvice.addReplay(this.replayData, commentId).subscribe({
      next: (respnse) => {
        this.getComments()
        console.log(this.comments)
        this.replayData.body = ''
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  showReplyInput(index: number) {
    this.showReplayInput = index
  }
  private getSnackBarConfig(panelClass: string): MatSnackBarConfig {
    return {
      // duration: duration,
      panelClass: [panelClass],
      horizontalPosition: 'center',  // Adjust as needed: 'start' | 'center' | 'end' | 'left' | 'right'
      verticalPosition: 'bottom'        // Adjust as needed: 'top' | 'bottom'
    };
  }
  showSuccess(message: string, duration: number = 3000) {
    const config = this.getSnackBarConfig('success-snackbar');
    this.snackBar.open(message, 'إغلاق', config);
  }
}
