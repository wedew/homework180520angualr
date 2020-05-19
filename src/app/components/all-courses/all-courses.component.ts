import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../service/course.service';
import {Course} from '../../models/course';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  course: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((Course) => {
      this.course = Course;
    }, (err) => {
      alert(err.error);
    });
  }

}
