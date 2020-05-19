import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../service/course.service';
import {Course} from '../../models/course';

@Component({
  selector: 'app-course-by-id',
  templateUrl: './course-by-id.component.html',
  styleUrls: ['./course-by-id.component.css']
})
export class CourseByIdComponent implements OnInit {

  course: Course;
  courseId: number;
  plug: boolean;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  public getCourseById(){
    this.plug = false;
    this.courseService.getCourseById(this.courseId).subscribe((course) => {
      this.course = course;
    }, (err) => {
      this.plug = true;
      this.course = null;
    });
  }

}
