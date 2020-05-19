import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCoursesComponent} from './components/all-courses/all-courses.component';
import {AddCourseComponent} from './components/add-course/add-course.component';
import {DeleteCourseComponent} from './components/delete-course/delete-course.component';
import {CourseByIdComponent} from './components/course-by-id/course-by-id.component';
import {CourseByNameComponent} from './components/course-by-name/course-by-name.component';


const routes: Routes = [
  {path: 'allCourses', component: AllCoursesComponent},
  {path: 'addCourse', component: AddCourseComponent},
  {path: 'deleteCourse', component: DeleteCourseComponent},
  {path: 'getCourseById', component: CourseByIdComponent},
  {path: 'getCourseByName', component: CourseByNameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
