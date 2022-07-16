import { R3Identifiers } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AddCourseComponent } from './pages/admin/add-course/add-course.component';
import { AdminAddQuestionsComponent } from './pages/admin/admin-add-questions/admin-add-questions.component';
import { AdminAddquizComponent } from './pages/admin/admin-addquiz/admin-addquiz.component';
import { AdminCoursesComponent } from './pages/admin/admin-courses/admin-courses.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './pages/admin/admin-navbar/admin-navbar.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminUpdateQuestionsComponent } from './pages/admin/admin-update-questions/admin-update-questions.component';
import { AdminUpdatequizComponent } from './pages/admin/admin-updatequiz/admin-updatequiz.component';
import { AdminViewQuestionsComponent } from './pages/admin/admin-view-questions/admin-view-questions.component';
import { AdminViewQuizesComponent } from './pages/admin/admin-view-quizes/admin-view-quizes.component';
import { AdminViewprofileComponent } from './pages/admin/admin-viewprofile/admin-viewprofile.component';
import { AdminViewstuntsComponent } from './pages/admin/admin-viewstunts/admin-viewstunts.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { CombineComponent } from './pages/admin/combine/combine.component';
import { UpdatecourseComponent } from './pages/admin/updatecourse/updatecourse.component';
import { ViewContentComponent } from './pages/admin/view-content/view-content.component';
import { ViewLessonsComponent } from './pages/admin/view-lessons/view-lessons.component';
import { ViewProfessorprofileComponent } from './pages/admin/view-professorprofile/view-professorprofile.component';
import { ViewProfessorsComponent } from './pages/admin/view-professors/view-professors.component';
import { ViewResultQuizesComponent } from './pages/admin/view-result-quizes/view-result-quizes.component';
import { ViewStudentResultsComponent } from './pages/admin/view-student-results/view-student-results.component';
import { ProfessorhomeComponent } from './pages/professor/professorhome/professorhome.component';
import { EditStudentProfileComponent } from './pages/student/edit-student-profile/edit-student-profile.component';
import { PrequizComponent } from './pages/student/prequiz/prequiz.component';
import { ResultComponent } from './pages/student/result/result.component';
import { ShowquizesComponent } from './pages/student/showquizes/showquizes.component';
import { StartquizComponent } from './pages/student/startquiz/startquiz.component';
import { StudentViewCourseComponent } from './pages/student/student-view-course/student-view-course.component';
import { StudentViewProfileComponent } from './pages/student/student-view-profile/student-view-profile.component';
import { StudentcompComponent } from './pages/student/studentcomp/studentcomp.component';
import { StudenthomeComponent } from './pages/student/studenthome/studenthome.component';
import { ViewAllQuizesComponent } from './pages/student/view-all-quizes/view-all-quizes.component';
import { ViewAllresultsComponent } from './pages/student/view-allresults/view-allresults.component';
import { YoutubePlayerDemoComponent } from './pages/student/youtube-player-demo/youtube-player-demo.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminGuard } from './service/admin.guard';
import { ProfesserGuard } from './service/professer.guard';
import { StudentGuard } from './service/student.guard';
import { SignupComponent } from './signup/signup/signup.component';

const routes: Routes = [

  {
    path:'',
    component:WelcomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminNavbarComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:AdminhomeComponent,
        pathMatch:'full'
      },
      {
        path:'edit-profile',
        component:AdminProfileComponent
      },
      {
        path:'view-profile',
        component:AdminViewprofileComponent
      },
      {
        path:'view-courses',
        component:AdminCoursesComponent
      },
      {
        path:'add-course',
        component:AddCourseComponent
      },
      {
        path:'view-professors',
        component:ViewProfessorsComponent
      },
      {
        path:'view-profile/:proid',
        component:ViewProfessorprofileComponent
      },
      {
        path:'update-course/:cid',
        component:UpdatecourseComponent
      },
      {
        path:'lessons/:cid',
        component:ViewLessonsComponent, 
        
      },
      {
        path:'view-results-student/:stuid',
        component:ViewResultQuizesComponent,
      },
      {
        path:'students',
        component:AdminViewstuntsComponent
      },
      {
        path:'quizes',
        component:AdminViewQuizesComponent
      },
      {
        path:'studentsresults',
        component:ViewStudentResultsComponent
      },
      {
        path:'add-quiz',
        component:AdminAddquizComponent
      },
      {
        path:'update-quiz/:qId',
        component:AdminUpdatequizComponent
      },
      {
        path:'questions/:qId/:title',
        component:AdminViewQuestionsComponent
      },
      {
        path:'add-question/:qId/:qtitle',
        component:AdminAddQuestionsComponent
      },
      {
        path:'update-question/:quesId',
        component:AdminUpdateQuestionsComponent
      }
      
      
     

    ]
  },
  {
    path:'professor',
    component:ProfessorhomeComponent,
    canActivate:[ProfesserGuard]
  },
  {
    path:'student',
    component:StudenthomeComponent,
    canActivate:[StudentGuard],
  
    
  },
  {
    path:'instructions/:qid',
    component:PrequizComponent, 
    canActivate:[StudentGuard],
  },
  {
    path:'start/:qid',
    component:StartquizComponent,
    canActivate:[StudentGuard],
  },
  {
    path:'results/:rId',
    component:ResultComponent,
    canActivate:[StudentGuard],
  },
  {
    path:'quizes/:cid/:cname',
    component:ShowquizesComponent,
    canActivate:[StudentGuard],
  },
  {
    path:'view-results/:qId',
    component:ViewAllresultsComponent,
    canActivate:[StudentGuard],
  },
  {
    path:'edit-profile/student',
    component:EditStudentProfileComponent,
    canActivate:[StudentGuard],
  },
  {
    path:'view-profile/student',
    component:StudentViewProfileComponent,
    canActivate:[StudentGuard],
  },
  {
    path:'view-quizes/student',
    component:ViewAllQuizesComponent,
    canActivate:[StudentGuard],
  },
  
  {
    path:'view-course/:cid/:cname',
    component:StudentViewCourseComponent,
    canActivate:[StudentGuard],
    children:[
      {
        path:'content',
        component:StudentcompComponent
      },
      
      
    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
