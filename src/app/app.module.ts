import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
//import { HeadsComponent } from "./display/heads/heads.component";
import { RightArmComponent } from "./display/arms/right-arm/right-arm.component";
import { LeftArmComponent } from "./display/arms/left-arm/left-arm.component";
import { BodyComponent } from "./display/body/body.component";
import { LegsComponent } from "./display/legs/legs.component";
import { DisplayComponent } from "./display/display.component";
import { HeadService } from "./head.service";
import { ArmService } from "./arm.service";
import { BodyService } from "./body.service";
// import { ArmsService } from "./navigation/arms/arms.service";
import { SelectService } from "./select.service";
import { HttpClientModule } from "@angular/common/http";
import { LegsService } from "./legs.service";
import { MoveableDirective } from "./draggable/moveable.directive";
import { DraggableDirective } from "./draggable/draggable.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    // HeadsComponent,
    RightArmComponent,
    LeftArmComponent,
    BodyComponent,
    LegsComponent,
    DisplayComponent,
    MoveableDirective,
    DraggableDirective
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [HeadService, ArmService, BodyService, SelectService, LegsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
