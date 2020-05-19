import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  public getAllCourses(): Observable<Course[]>{
    return this.httpClient.get<Course[]>('http://localhost:8080/all');
  }

  public addCourse(newCourse: Course): Observable<Course>{
    return this.httpClient.post<Course>('http://localhost:8080/add', newCourse);
  }

  public deleteCourse(courseId: number): Observable<Course>{
    return this.httpClient.delete<Course>('http://localhost:8080/delete/' + courseId);
  }

  public getCourseById(courseId: number): Observable<Course>{
    return this.httpClient.get<Course>('http://localhost:8080/getById/' + courseId);
  }

  public getCourseByName(courseName: string): Observable<Course>{
    return this.httpClient.get<Course>('http://localhost:8080/getByName/' + courseName);
  }

}
