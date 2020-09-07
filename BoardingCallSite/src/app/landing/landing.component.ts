import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [
  ]
})
export class LandingComponent implements OnInit {
  slides: string [] = ['../../assets/placeholder.jpg', '../../assets/placeholder.jpg', '../../assets/placeholder.jpg', '../../assets/placeholder.jpg'];
  clans: string [] = ['The Ants', 'The Spiders', 'The Praying Mantis', 'The Mosquitos'];
  info: string [] = ['uno', 'dos', 'tre', 'quatre', 'cinq'];
  alt: string [] = ['uno', 'dos', 'tre', 'quatre'];
  i = 0;
  minSlides = 0;
  maxSlides = 3;

  constructor() { }

  ngOnInit(): void { }

  getSlide(): string
  {
    return this.slides[this.i];
  }

  getPrev(): void
  {
    if(this.i >= this.minSlides)
    {
      this.i = this.i === 0 ? 0 : this.i - 1;
    }
    else
    {
      this.i = this.maxSlides;
    }
  }

  getNext(): void
  {
    this.i = this.i === this.slides.length ? this.i : this.i + 1;
  }

  slideInfo(): string
  {
    return this.info[this.i];
  }

  slideClan(): string
  {
    return this.clans[this.i];
  }

  slideAlt(): string
  {
    return this.alt[this.i];
  }

}
