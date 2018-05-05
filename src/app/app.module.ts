import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeadsComponent } from "./display/heads/heads.component";
import { LeftArmComponent } from "./display/arms/left-arm/left-arm.component";
import { RightArmComponent } from "./display/arms/right-arm/right-arm.component";
import { BodyComponent } from "./display/body/body.component";
import { LegsComponent } from "./display/legs/legs.component";
import { DisplayComponent } from "./display/display.component";
import { HeadService } from "./head.service";
import { ArmService } from "./arm.service";
import { BodyService } from "./body.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HeadsComponent,
    LeftArmComponent,
    RightArmComponent,
    BodyComponent,
    LegsComponent,
    DisplayComponent
  ],
  imports: [BrowserModule],
  providers: [HeadService, ArmService, BodyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
