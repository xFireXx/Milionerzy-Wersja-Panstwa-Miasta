import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './modules/game/game.component';
import { HomeComponent } from './modules/home/home.component';
import { ContainernameComponent } from './modules/game/components/containername/containername.component';
import { FormsModule } from '@angular/forms';
import { PrizeboxComponent } from './modules/game/components/prizebox/prizebox/prizebox.component';
import { PrizeComponent } from './modules/game/components/prizebox/prize/prize.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    ContainernameComponent,
    PrizeboxComponent,
    PrizeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
