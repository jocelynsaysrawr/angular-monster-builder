import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeadsComponent } from "./display/heads/heads.component";
import { ArmsComponent } from "./display/arms/arms.component";
import { BodyComponent } from "./display/body/body.component";
import { LegsComponent } from "./display/legs/legs.component";
import { DisplayComponent } from "./display/display.component";
import { HeadService } from "./head.service";
import { ArmService } from "./arm.service";
import { SelectService } from "./select.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HeadsComponent,
    ArmsComponent,
    BodyComponent,
    LegsComponent,
    DisplayComponent
  ],
  imports: [BrowserModule],
  providers: [HeadService, ArmService],
  bootstrap: [AppComponent]
})
export class AppModule {}
