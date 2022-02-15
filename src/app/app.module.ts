import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BodyComponent } from 'src/center/center.component';
import { FooterComponent } from 'src/footer/footer.component';
import { HeaderComponent } from 'src/header/header.component';
import { lolComponent } from 'src/lol/lol.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
