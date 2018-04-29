import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";

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

  constructor(public headservice: HeadService) {
    this.allHeads = headservice.allHeads;
    this.selectHead = headservice.selectHead;
  }

  ngOnInit() {}

  onShowNavigation(buttonName: string) {
    this.dropdownStatus = this.dropdownStatus ? false : true;
    this.activeButton = buttonName;

    console.log("activeButton: ", this.activeButton);
  }
}
