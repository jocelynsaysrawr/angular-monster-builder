import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { ArmService } from "../arm.service";
import { BodyService } from "../body.service";
import { LegsService } from "../legs.service";
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  animations: [
    trigger('legsAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.5)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
      ]))),
    ])
  ]
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

  // state: string = 'small';

  animateMe() {
    console.log("clicking things works????");
    // this.state = (this.state === 'small' ? 'large' : 'small');
  }

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
