import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeadsComponent } from './navigation/heads/heads.component';
import { ArmsComponent } from './navigation/arms/arms.component';
import { BodyComponent } from './navigation/body/body.component';
import { LegsComponent } from './navigation/legs/legs.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';
import { LegsService } from './navigation/legs/legs.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HeadsComponent,
    ArmsComponent,
    BodyComponent,
    LegsComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LegsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
