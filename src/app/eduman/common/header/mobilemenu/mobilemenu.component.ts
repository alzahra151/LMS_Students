import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './helper';
import { navbarData } from './nav-data';
import { EnrollmentService } from 'src/app/services/enrollment/enrollment.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' }),
          ])
        ),
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None
})
export class MobilemenuComponent implements OnInit {
  courses: any
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  constructor(public router: Router, private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.getStudenCourses()
  }

  getStudenCourses() {
    this.enrollmentService.getStudentCourses().subscribe({
      next: (res) => {
        this.courses = res
        console.log(this.courses, 'courser')
        const dynamicItems = this.courses.map((course:any) => ({
          routeLink: `/course-details/${course.course.id}`,
          label: course.course.title
        }));
        console.log('test', dynamicItems)
        this.navData[1].items = [ ...dynamicItems];
      }, error: (error) => {
        console.log(error)
      }
    })
  } 
  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }

}
