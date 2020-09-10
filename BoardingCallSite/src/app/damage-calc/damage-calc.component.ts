import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-damage-calc',
  templateUrl: './damage-calc.component.html',
  styles: []
})
export class DamageCalcComponent implements OnInit {
  weatherConditions: string [] = ['Sunny', 'Rainy', 'Stormy', 'Foggy'];
  weatherChange: 25;
  turn = 0;
  weather;
  weathername;
  forecast;
  basedamage = 0;
  distance;
  result;
  weapons;
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.turnButton();
  }

  turnButton(): void
  {
    this.turn++;
    this.forecast = Math.floor(Math.random() * Math.floor(3));
    this.forecastImg(this.forecast);
    this.weathernames(this.forecast);
  }

  forecastImg(forecast): void {
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

  weathernames(forecast): void {
    if (forecast === 0)
    {
      this.weathername = this.weatherConditions[forecast];
      return this.weathername;
    }
    else if (forecast === 1)
    {
      this.weathername = this.weatherConditions[forecast];
      return this.weathername;
    }
    else if (forecast === 2)
    {
      this.weathername = this.weatherConditions[forecast];
      return this.weathername;
    }
    else
    {
      this.weathername = this.weatherConditions[forecast];
      return this.weathername;
    }
  }

  damageCalc(data)
  {
    this.weapons = data.weaponbugs;
    this.distance = data.distance;
    let weatherboost = this.damage(this.forecast);
    let gunboost = this.weapon(this.weapons, this.distance);
    return this.result = weatherboost + gunboost;
  }

  damage(forecast)
  {
    if (forecast === 0)
    {
      //Sunny
      return this.basedamage + 0;
    }
    else if (forecast === 1)
    {
      //Rainy
      return this.basedamage + 0;
    }
    else if (forecast === 2)
    {
      //Stormy
      return this.basedamage + 0;
    }
    else
    {
      //Foggy
      return this.basedamage + 0;
    }
  }

  weapon(weapons, distance)
  {
    if (this.forecast === 2)
    {
      let luckyshot = Math.floor(Math.random() * 100 + 1);
      if (luckyshot === 1)
      {
        this.basedamage + 1;
      }
    }
    else
    {
      this.basedamage + 0;
    }
    if (weapons === 1 && distance >= 1 || distance <= 3)
    {
      //Shotgun
      return this.basedamage + 5;
    }
    else if (weapons === 2 && distance >= 3 || distance <= 6)
    {
      //Handgun
      return this.basedamage + 2;
    }
    else if (weapons === 3 && distance >= 2 || distance <= 6)
    {
      //Bow
      return this.basedamage + 3;
    }
    else if (weapons === 4 && distance >= 4 || distance <= 7)
    {
      //Sniper
      return this.basedamage + 4;
    }
    else if (weapons === 5 && distance === 8)
    {
      //Katasect
      return this.basedamage + 3;
    }
    else
    {
      return this.basedamage;
    }
  }
}
