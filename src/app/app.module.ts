import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { CarouselImageSlideComponent } from './carousel-image-slide/carousel-image-slide.component';
import { NFACreationComponent } from './nfa-creation/nfa-creation.component';
import { ListOfNoteForApprovalComponent } from './list-of-note-for-approval/list-of-note-for-approval.component';
import { UsercreationComponent } from './usercreation/usercreation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NfaReportComponent } from './nfa-report/nfa-report.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
    CarouselImageSlideComponent,
    NFACreationComponent,
    ListOfNoteForApprovalComponent,
    UsercreationComponent,
    NfaReportComponent,
    FlightBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
