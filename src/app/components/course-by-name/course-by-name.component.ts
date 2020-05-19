import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/course';
import {CourseService} from '../../service/course.service';

@Component({
  selector: 'app-course-by-name',
  templateUrl: './course-by-name.component.html',
  styleUrls: ['./course-by-name.component.css']
})
export class CourseByNameComponent implements OnInit {

  course: Course;
  courseName: string;
  plug: boolean;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  public getCourseByName(){
    this.plug = false;
    this.courseService.getCourseByName(this.courseName).subscribe((course) => {
      this.course = course;
    }, (err) => {
      this.plug = true;
      this.course = null;
    });

  }

}
