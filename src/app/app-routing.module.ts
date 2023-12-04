import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './modules/game/game.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'game', component: GameComponent, pathMatch: 'full'},
  { path: '', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
