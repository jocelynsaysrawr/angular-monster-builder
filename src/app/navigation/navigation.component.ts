import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
// import { ArmService } from "../arm.service";
import { SelectService } from "../select.service";
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

  legs: Array<Object>;
  setCurrentLegs: Function;

  constructor(public headService: HeadService, public legsService: LegsService) {
    this.allHeads = headService.allHeads;
    this.selectHead = headService.selectHead;
    // this.allArms = armService.allArms;
    // this.selectArms = armService.selectArms;
    this.legs = legsService.legs;
    this.setCurrentLegs = legsService.setCurrentLegs;
    console.log("this.legs", this.legs);
    console.log("this.setCurrentLegs", this.setCurrentLegs);
  }

  ngOnInit() { }

  onShowNavigation(buttonName: string) {
    this.dropdownStatus = this.dropdownStatus ? false : true;
    this.activeButton = buttonName;

    console.log("activeButton: ", this.activeButton);
  }
}
