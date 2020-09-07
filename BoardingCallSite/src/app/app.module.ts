import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DamageCalcComponent } from './damage-calc/damage-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    DamageCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}
