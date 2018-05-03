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
  errorMsg;

  constructor(private _headService: HeadService) {}

  onShowNavigation(buttonName: string) {
    this.dropdownStatus = this.dropdownStatus ? false : true;
    this.activeButton = buttonName;

    console.log("activeButton: ", this.activeButton);
  }

  ngOnInit() {
    this._headService
      .getAllHeads()
      .subscribe(data => (this.allHeads = data), error => console.log(error));
  }
}
