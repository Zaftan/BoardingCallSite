import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [
  ]
})
export class LandingComponent implements OnInit {
  slides: string [] = ['/src/assets/placeholder.jpg', '/src/assets/Pictures/839px-Ubisoft_logo.png', './assets/Knot_Slide_3.jpg'];
  info: string [] = ['uno', 'dos', 'tre', 'quatre'];
  i = 0;
  maxSlides = 3;

  constructor() { }

  ngOnInit(): void { }

  getSlide(): string
  {
    return this.slides[this.i];
  }

  getPrev(): void
  {
    this.i = this.i === 0 ? 0 : this.i - 1;
  }

  getNext(): void
  {
    this.i = this.i === this.slides.length ? this.i : this.i + 1;
  }

  slideInfo(): string
  {
    return this.info[this.i];
  }

}
