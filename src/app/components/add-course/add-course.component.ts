import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../service/course.service';
import {Course} from '../../models/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  title: string;
  duration: number;
  startDate: Date;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
  }

  public addNewCourse(){
    const course: Course = new Course(0, this.title, this.duration, this.startDate);
    this.courseService.addCourse(course).subscribe((course) => {
      alert('course added!');
    }, (err) => {
      alert(err.error);
    });

  }

}
