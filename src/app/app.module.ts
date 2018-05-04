import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeadsComponent } from "./display/heads/heads.component";
//import { ArmsComponent } from "./navigation/arms/arms.component";
import { BodyComponent } from "./display/body/body.component";
import { LegsComponent } from "./display/legs/legs.component";
import { DisplayComponent } from "./display/display.component";
import { HeadService } from "./head.service";
//import { ArmsService } from "./navigation/arms/arms.service";
import { SelectService } from "./select.service";
import { BodyService } from "./body.service";

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
  providers: [HeadService, SelectService, BodyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
