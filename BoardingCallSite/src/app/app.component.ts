import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],

})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    if (window.scrollY > 0) {
      document.getElementById('header').classList.add('headerBg');
    }
    if (window.scrollY < 1) {
      document.getElementById('header').classList.remove('headerBg');
    }
  }


}
