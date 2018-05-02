import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeadsComponent } from "./navigation/heads/heads.component";
//import { ArmsComponent } from "./navigation/arms/arms.component";
import { BodyComponent } from "./navigation/body/body.component";
import { LegsComponent } from "./navigation/legs/legs.component";
import { DisplayComponent } from "./display/display.component";
import { HeadService } from "./head.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HeadsComponent,
    // ArmsComponent,
    BodyComponent,
    LegsComponent,
    DisplayComponent
  ],
  imports: [BrowserModule],
  providers: [HeadService],
  bootstrap: [AppComponent]
})
export class AppModule {}
