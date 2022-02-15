import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/footer/footer.component';
import { HeaderComponent } from 'src/header/header.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LegendsComponent } from 'src/legends/legends.component';
import { CenterComponent } from 'src/center/center.component';
import { FortniteComponent } from 'src/fortnite/fortnite.component';
import { LeagueComponent } from 'src/league/league.component';
import { ValorantComponent } from 'src/valorant/valorant.component';
import { TeamfightTacticesComponent } from 'src/tactics/tactics.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LegendsComponent,
    FortniteComponent,
    LeagueComponent,
    ValorantComponent,
    TeamfightTacticesComponent,
    CenterComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
