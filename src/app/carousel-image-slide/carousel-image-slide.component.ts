import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-carousel-image-slide',
  templateUrl: './carousel-image-slide.component.html',
  styleUrls: ['./carousel-image-slide.component.css']
})
export class CarouselImageSlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    $('.carousel').carousel({
      interval: 2000
    });
  }

}
