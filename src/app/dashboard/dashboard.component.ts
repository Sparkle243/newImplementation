import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  dashboardData: any[] = [
    { title: 'Users', value: 1500, description: 'Total registered users' },
    { title: 'Sales', value: 3200, description: 'Total sales this month' },
    { title: 'Feedback', value: 85, description: 'Customer feedback received' }
  ];
  slides = [
    { image: 'https://via.placeholder.com/800x400', alt: 'Slide 1' },
    { image: 'https://via.placeholder.com/800x400', alt: 'Slide 2' },
    { image: 'https://via.placeholder.com/800x400', alt: 'Slide 3' }
  ];
  
  constructor() { }

  ngOnInit(): void {
   
  }
  
  ngAfterViewInit(): void {
    $('.carousel').carousel({
      interval: 2000
    });
  }

}
