import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-coursetabdetails',
  templateUrl: './coursetabdetails.component.html',
  styleUrls: ['./coursetabdetails.component.scss']
})
export class CoursetabdetailsComponent {
  @Input() courses!: Course[];
}
