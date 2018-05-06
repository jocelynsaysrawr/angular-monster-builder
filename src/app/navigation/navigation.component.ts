import { Component, OnInit } from '@angular/core';
import { HeadService } from '../services/head.service';
import { ArmService } from '../services/arm.service';
import { BodyService } from '../services/body.service';
import { LegService } from '../services/leg.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  dropdownStatus: boolean = false;
  activeButton: string = '';
  allHeads: Array<Object>;
  selectHead: Function;
  allArms: Array<Object>;
  selectArm: Function;
  allBodys: Array<Object>;
  selectBody: Function;
  allLegs: Array<Object>;
  selectLeg: Function;
  errorMsg;

  constructor(
    public headService: HeadService,
    public armService: ArmService,
    public bodyService: BodyService,
    public legService: LegService
  ) {
    this.allHeads = headService.allHeads;
    this.selectHead = headService.selectHead;

    this.allBodys = bodyService.allBodys;
    this.selectBody = bodyService.selectBody;

    this.allArms = armService.allArms;
    this.selectArm = armService.selectArm;

    this.allLegs = legService.allLegs;
    this.selectLeg = legService.selectLeg;
  }

  onShowNavigation(buttonName: string) {
    this.dropdownStatus = this.dropdownStatus ? false : true;
    this.activeButton = buttonName;

    console.log('activeButton: ', this.activeButton);
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
