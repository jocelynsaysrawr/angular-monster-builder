import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ArmService {
  allArms = [
    {
      id: 0,
      name: "Hulk Arm",
      LArmSrc: "./assets/arms/left-hulk-arm.png",
      RArmSrc: "./assets/arms/right-hulk-arm.png"
    },
    {
      id: 1,
      name: "Werewolf Arm",
      LArmSrc: "./assets/arms/left-orange-arm.png",
      RArmSrc: "./assets/arms/right-orange-arm.png"
    },
    {
      id: 2,
      name: "Floopy Arm",
      LArmSrc: "./assets/arms/left-floopy-arm.png",
      RArmSrc: "./assets/arms/right-floopy-arm.png"
    },
    {
      id: 3,
      name: "Golem Arm",
      LArmSrc: "./assets/arms/left-golem-arm.png",
      RArmSrc: "./assets/arms/right-golem-arm.png"
    },
    {
      id: 4,
      name: "Tentacle Arm",
      LArmSrc: "./assets/arms/left-tentacle-arm.png",
      RArmSrc: "./assets/arms/right-tentale-arm.png"
    }
  ];

  armSource = new BehaviorSubject<any>("");
  arm$ = this.armSource.asObservable();

  selectedArms = this.allArms[0];

  constructor() {
    this.selectArms(this.selectedArms.id);
  }

  selectArms(armsId) {
    this.selectedArms = this.allArms.filter(
      arm => arm.id === Number(armsId)
    )[0];
    this.armSource.next(this.selectedArms);
  }
}
