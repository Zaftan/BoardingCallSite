import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, NgForm, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-damage-calc',
  templateUrl: './damage-calc.component.html',
  styles: []
})
export class DamageCalcComponent implements OnInit {
  weatherConditions: string [] = ['Sunny', 'Rainy', 'Stormy', 'Foggy'];
  turn = 0;
  weather;
  weathername;
  forecast;
  basedamage = 0;
  distance;
  result;
  weapons;
  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.turnButton();
  }

  turnButton(): void {
    this.turn++;
    this.forecast = Math.floor(Math.random() * Math.floor(4));
    this.forecastImg(this.forecast);
    this.weathernames(this.forecast);
  }

  forecastImg(forecast): void {
    if (forecast === 0) {
      this.weather = '../../assets/Pictures/Sunny.png';
      return this.weather;
    } else if (forecast === 1) {
      this.weather = '../../assets/Pictures/Rainy.png';
      return this.weather;
    } else if (forecast === 2) {
      this.weather = '../../assets/Pictures/Stormy.png';
      return this.weather;
    } else {
      this.weather = '../../assets/Pictures/Foggy.png';
      return this.weather;
    }
  }

  weathernames(forecast): void {
    if (forecast === 0) {
      this.weathername = this.weatherConditions[forecast];
      return this.weathername;
    } else if (forecast === 1) {
      this.weathername = this.weatherConditions[forecast];
      return this.weathername;
    } else if (forecast === 2) {
      this.weathername = this.weatherConditions[forecast];
      return this.weathername;
    } else {
      this.weathername = this.weatherConditions[forecast];
      return this.weathername;
    }
  }

  damageCalc(data) {
    this.basedamage = 0;
    this.weapons = data.weaponbugs;
    this.distance = data.distance;
    return this.result =this.weapon(this.weapons, this.distance);
  }

  weapon(weapons, distance) {
    let miss = Math.floor(Math.random() * 100 + 1);
    if (miss <= 5) {
      return this.basedamage = 0;
    }
    if (this.forecast === 3) {
      if (miss <= 20) {
        return this.basedamage = 0;
      }
    }

    if (weapons == 1 && distance >= 1 && distance <= 3) {
      // Bucksect
      this.basedamage = 5;
    } else if (weapons == 2 && distance >= 1 && distance <= 4) {
      // Handgun
      this.basedamage = 2;
    } else if (weapons == 3 && distance >= 1 && distance <= 6) {
      // Bowsect
      this.basedamage = 3;
    } else if (weapons == 4 && distance >= 4 && distance <= 7) {
      // Sharpsect
      this.basedamage = 4;
    } else if (weapons == 5 && distance == 8) {
      // Katasect
     this.basedamage = 3;
    }
    if (this.forecast === 2) {
      let luckyshot = Math.floor(Math.random() * 100 + 1);
      if (luckyshot <= 3) {
        this.basedamage += 1;
      }
    }
    return this.basedamage;
  }
}
