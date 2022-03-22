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
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'; 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

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
    CenterComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
