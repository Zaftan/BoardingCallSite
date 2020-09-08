import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-damage-calc',
  templateUrl: './damage-calc.component.html',
  styles: [
  ]
})
export class DamageCalcComponent implements OnInit {
  weatherConditions: string [] = ['Sunny', 'Rainy', 'Stormy', 'Foggy'];
  weatherChange: 25;
  turn = 0;
  weather;
  title;

  constructor() { }

  ngOnInit(): void {
    this.turnButton();
  }

  turnButton(): void
  {
    let forecast;
    this.turn++;
    forecast = Math.floor(Math.random() * Math.floor(3));
    this.forecast(forecast);
    this.weathername(forecast);
  }

  forecast(forecast): void {
    if (forecast === 0)
    {
      this.weather = '../../assets/Pictures/Sunny.png';
      return this.weather;
    }
    else if (forecast === 1)
    {
      this.weather = '../../assets/Pictures/Rainy.png';
      return this.weather;
    }
    else if (forecast === 2)
    {
      this.weather = '../../assets/Pictures/Stormy.png';
      return this.weather;
    }
    else
    {
      this.weather = '../../assets/Pictures/Foggy.png';
      return this.weather;
    }
  }

  weathername(forecast): void {
    if (forecast === 0)
    {
      this.title = this.weatherConditions[forecast];
      return this.title;
    }
    else if (forecast === 1)
    {
      this.title = this.weatherConditions[forecast];
      return this.title;
    }
    else if (forecast === 2)
    {
      this.title = this.weatherConditions[forecast];
      return this.title;
    }
    else
    {
      this.title = this.weatherConditions[forecast];
      return this.title;
    }
  }

  damageCalc()
  {
    //
  }
}
