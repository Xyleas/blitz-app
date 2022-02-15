import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LeagueComponent } from 'src/league/league.component';
import { ValorantComponent } from 'src/valorant/valorant.component';

const routes: Routes = [
  { path: 'http://localhost:4200/league', component: LeagueComponent },
  { path: 'http://localhost:4200/valorant', component: ValorantComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
