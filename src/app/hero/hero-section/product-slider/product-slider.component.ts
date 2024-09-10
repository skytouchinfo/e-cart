import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval, map, Observable, startWith } from 'rxjs';
import { sliderData } from 'src/app/data/common.data';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],
})
export class ProductSliderComponent implements OnInit, OnChanges {
  slides = sliderData;
  currentSlideObserver = new Observable<number>();
  slideInterval$!: Observable<number>;
  currentSlideIndex = 0;
  constructor() {}

  ngOnInit() {
    this.createSlideInterval();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  createSlideInterval = (): void => {
    this.slideInterval$ = interval(3000).pipe(
      // Change slide every 3 seconds
      startWith(0),
      map(() => {
        this.currentSlideIndex =
          (this.currentSlideIndex + 1) % this.slides.length;
        return this.currentSlideIndex;
      })
    );

    this.slideInterval$.subscribe((index) => {
      // Optional: Perform any additional actions when slide changes
    });
  };

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
