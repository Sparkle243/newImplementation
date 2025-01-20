import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { CarouselImageSlideComponent } from './carousel-image-slide/carousel-image-slide.component';
import { NFACreationComponent } from './nfa-creation/nfa-creation.component';
import { ListOfNoteForApprovalComponent } from './list-of-note-for-approval/list-of-note-for-approval.component';
import { UsercreationComponent } from './usercreation/usercreation.component';
import { NfaReportComponent } from './nfa-report/nfa-report.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component:DashboardComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'employeeDetails', component: EmployeeDetailsComponent },
    { path: 'employeeForm', component: EmployeeFormComponent },
     { path: 'CarouselImageSlideComponent', component: CarouselImageSlideComponent },
     { path: 'NFACreationComponent', component: NFACreationComponent },
     { path: 'ListOfNoteForApproval', component: ListOfNoteForApprovalComponent },
      { path: 'Usercreation', component: UsercreationComponent },
     { path: 'NfaReport', component: NfaReportComponent },
     { path: 'FlightBooking', component: FlightBookingComponent },
     
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }