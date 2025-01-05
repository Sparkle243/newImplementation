import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselImageSlideComponent } from './carousel-image-slide.component';

describe('CarouselImageSlideComponent', () => {
  let component: CarouselImageSlideComponent;
  let fixture: ComponentFixture<CarouselImageSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselImageSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselImageSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
