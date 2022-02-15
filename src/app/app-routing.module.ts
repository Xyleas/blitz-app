import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LeagueComponent } from 'src/league/league.component';
import { ValorantComponent } from 'src/valorant/valorant.component';
import { LegendsComponent } from 'src/legends/legends.component';
import { FortniteComponent } from 'src/fortnite/fortnite.component';
import { TeamfightTacticesComponent } from 'src/tactics/tactics.component';

const routes: Routes = [
  { path: 'http://localhost:4200/league', component: LeagueComponent },
  { path: 'http://localhost:4200/valorant', component: ValorantComponent },
  { path: 'http://localhost:4200/legends', component: LegendsComponent},
  { path: 'http://localhost:4200/fortnite', component: FortniteComponent},
  { path: 'http://localhost:4200/tactics', component: TeamfightTacticesComponent},

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
