import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { SelectService } from "../select.service";

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

  constructor(public selectservice: SelectService) {
    this.allHeads = selectservice.allHeads;
    this.selectHead = selectservice.selectHead;
    this.allArms = selectservice.allArms;
    this.selectArms = selectservice.selectArms;
  }

  ngOnInit() {}

  onShowNavigation(buttonName: string) {
    this.dropdownStatus = this.dropdownStatus ? false : true;
    this.activeButton = buttonName;

    console.log("activeButton: ", this.activeButton);
  }
}
