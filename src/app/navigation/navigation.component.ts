import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { ArmService } from "../arm.service";
import { BodyService } from "../body.service";
import { LegsService } from "../legs.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  dropdownStatus: boolean = false;
  activeButton: string = "";
  allHeads: Array<Object>;
  selectHead: Function;
  allArms: Array<Object>;
  selectArms: Function;
  bodies: Array<Object>;
  setCurrentBody: Function;
  legs: Array<Object>;
  setCurrentLegs: Function;
  errorMsg;

  constructor(
    public headService: HeadService,
    public armService: ArmService,
    public bodyService: BodyService,
    public legsService: LegsService
  ) {
    this.allHeads = headService.allHeads;
    this.selectHead = headService.selectHead;
    this.allArms = armService.allArms;
    this.selectArms = armService.selectArms;
    this.bodies = bodyService.bodies;
    this.setCurrentBody = bodyService.setCurrentBody;
    this.legs = legsService.legs;
    this.setCurrentLegs = legsService.setCurrentLegs;
  }

  onShowNavigation(buttonName: string) {
    this.dropdownStatus = this.dropdownStatus ? false : true;
    this.activeButton = buttonName;

    console.log("activeButton: ", this.activeButton);
  }

  ngOnInit() {
    this.headService
      .getAllHeads()
      .subscribe(data => (this.allHeads = data), error => console.log(error));
  }
}
