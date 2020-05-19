import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../service/course.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {

  courseId: number;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  public deleteCourse(){
    this.courseService.deleteCourse(this.courseId).subscribe((c) => {
      alert('course deleted!');
    }, (err) => {
      alert(err.error);
      }
      );
  }

}
