import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { SelectService } from "../select.service";
import { BodyService } from "../body.service";

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

  constructor(
    public selectservice: SelectService,
    public bodyService: BodyService
  ) {
    this.allHeads = selectservice.allHeads;
    this.selectHead = selectservice.selectHead;
    this.allArms = selectservice.allArms;
    this.selectArms = selectservice.selectArms;
    this.bodies = bodyService.bodies;
    this.setCurrentBody = bodyService.setCurrentBody;
  }

  ngOnInit() {}

  onShowNavigation(buttonName: string) {
    this.dropdownStatus = this.dropdownStatus ? false : true;
    this.activeButton = buttonName;

    console.log("activeButton: ", this.activeButton);
  }
}
