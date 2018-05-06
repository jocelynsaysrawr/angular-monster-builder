import { Component, OnInit } from "@angular/core";
import { HeadService } from "../services/head.service";
import { LeftArmService } from "../services/left-arm.service";
import { RightArmService } from "../services/right-arm.service";
import { BodyService } from "../services/body.service";
import { LegService } from "../services/leg.service";

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
  allLeftArms: Array<Object>;
  selectLeftArm: Function;
  allRightArms: Array<Object>;
  selectRightArm: Function;
  allBodys: Array<Object>;
  selectBody: Function;
  allLegs: Array<Object>;
  selectLeg: Function;
  errorMsg;

  constructor(
    public headService: HeadService,
    public leftArmService: LeftArmService,
    public rightArmService: RightArmService,
    public bodyService: BodyService,
    public legService: LegService
  ) {
    this.allHeads = headService.allHeads;
    this.selectHead = headService.selectHead;

    this.allBodys = bodyService.allBodys;
    this.selectBody = bodyService.selectBody;

    this.allLeftArms = leftArmService.allLeftArms;
    this.selectLeftArm = leftArmService.selectLeftArm;

    this.allRightArms = rightArmService.allRightArms;
    this.selectRightArm = rightArmService.selectRightArm;

    this.allLegs = legService.allLegs;
    this.selectLeg = legService.selectLeg;
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
    this.bodyService
      .getAllBodys()
      .subscribe(data => (this.allBodys = data), error => console.log(error));
    this.armService
      .getAllArms()
      .subscribe(data => (this.allArms = data), error => console.log(error));
    this.legService
      .getAllLegs()
      .subscribe(data => (this.allLegs = data), error => console.log(error));
  }
}
