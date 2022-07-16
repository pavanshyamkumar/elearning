import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { ProfessorhomeComponent } from './pages/professor/professorhome/professorhome.component';
import { StudenthomeComponent } from './pages/student/studenthome/studenthome.component';
import { AdminNavbarComponent } from './pages/admin/admin-navbar/admin-navbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminViewprofileComponent } from './pages/admin/admin-viewprofile/admin-viewprofile.component';
import { AdminCoursesComponent } from './pages/admin/admin-courses/admin-courses.component';
import { AddCourseComponent } from './pages/admin/add-course/add-course.component';
import { ViewProfessorsComponent } from './pages/admin/view-professors/view-professors.component';
import { AddProfessorComponent } from './pages/admin/add-professor/add-professor.component';
import { ViewProfessorprofileComponent } from './pages/admin/view-professorprofile/view-professorprofile.component';
import { UpdatecourseComponent } from './pages/admin/updatecourse/updatecourse.component';
import { ViewLessonsComponent } from './pages/admin/view-lessons/view-lessons.component';
import { CombineComponent } from './pages/admin/combine/combine.component';
import { ViewContentComponent } from './pages/admin/view-content/view-content.component';
import { AddLessonComponent } from './pages/admin/add-lesson/add-lesson.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule ,NgxUiLoaderHttpModule} from "ngx-ui-loader";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminViewstuntsComponent } from './pages/admin/admin-viewstunts/admin-viewstunts.component';
import { StudentNavbarComponent } from './pages/student/student-navbar/student-navbar.component';
import {MatRadioModule} from '@angular/material/radio';
import { AdminViewQuizesComponent } from './pages/admin/admin-view-quizes/admin-view-quizes.component';
import { AdminAddquizComponent } from './pages/admin/admin-addquiz/admin-addquiz.component';
import { AdminUpdatequizComponent } from './pages/admin/admin-updatequiz/admin-updatequiz.component';
import { AdminViewQuestionsComponent } from './pages/admin/admin-view-questions/admin-view-questions.component';
import { AdminAddQuestionsComponent } from './pages/admin/admin-add-questions/admin-add-questions.component';
import { AdminUpdateQuestionsComponent } from './pages/admin/admin-update-questions/admin-update-questions.component';
import { StudentViewCourseComponent } from './pages/student/student-view-course/student-view-course.component';
import { StudentcompComponent } from './pages/student/studentcomp/studentcomp.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PrequizComponent } from './pages/student/prequiz/prequiz.component';
import { StartquizComponent } from './pages/student/startquiz/startquiz.component';
import { YoutubePlayerDemoComponent } from './pages/student/youtube-player-demo/youtube-player-demo.component';
import { ResultComponent } from './pages/student/result/result.component';
import { ShowquizesComponent } from './pages/student/showquizes/showquizes.component';
import { ViewAllresultsComponent } from './pages/student/view-allresults/view-allresults.component';
import { StudentViewProfileComponent } from './pages/student/student-view-profile/student-view-profile.component';
import { EditStudentProfileComponent } from './pages/student/edit-student-profile/edit-student-profile.component';
import { ViewAllQuizesComponent } from './pages/student/view-all-quizes/view-all-quizes.component';
import { ViewStudentResultsComponent } from './pages/admin/view-student-results/view-student-results.component';
import { ViewResultQuizesComponent } from './pages/admin/view-result-quizes/view-result-quizes.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    AdminhomeComponent,
    ProfessorhomeComponent,
    StudenthomeComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminViewprofileComponent,
    AdminCoursesComponent,
    AddCourseComponent,
    ViewProfessorsComponent,
    AddProfessorComponent,
    ViewProfessorprofileComponent,
    UpdatecourseComponent,
    ViewLessonsComponent,
    CombineComponent,
    ViewContentComponent,
    AddLessonComponent,
    AdminViewstuntsComponent,
    StudentNavbarComponent,
    
    AdminViewQuizesComponent,
    AdminAddquizComponent,
    AdminUpdatequizComponent,
    AdminViewQuestionsComponent,
    AdminAddQuestionsComponent,
    AdminUpdateQuestionsComponent,
    StudentViewCourseComponent,
    StudentcompComponent,
    PrequizComponent,
    StartquizComponent,
    YoutubePlayerDemoComponent,
    ResultComponent,
    ShowquizesComponent,
    ViewAllresultsComponent,
    StudentViewProfileComponent,
    EditStudentProfileComponent,
    ViewAllQuizesComponent,
    ViewStudentResultsComponent,
    ViewResultQuizesComponent,


  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatStepperModule,
    NgxUiLoaderModule ,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
      
    })
    







  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
