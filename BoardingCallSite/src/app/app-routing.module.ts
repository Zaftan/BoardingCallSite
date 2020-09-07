import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DamageCalcComponent } from './damage-calc/damage-calc.component';

const routes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'Calculator', component: DamageCalcComponent },
  { path: 'landing', component: LandingComponent },
  { path: '**', component: LandingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
