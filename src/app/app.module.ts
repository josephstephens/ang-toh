import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Test1Component } from './test1/test1.component';
import { HeroesTest1Component } from './heroes-test1/heroes-test1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Test1Component,
    HeroesTest1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
