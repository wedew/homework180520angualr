import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { CourseByIdComponent } from './components/course-by-id/course-by-id.component';
import { CourseByNameComponent } from './components/course-by-name/course-by-name.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllCoursesComponent,
    AddCourseComponent,
    DeleteCourseComponent,
    CourseByIdComponent,
    CourseByNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
