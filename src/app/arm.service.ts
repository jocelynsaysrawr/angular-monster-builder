import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ArmService {
  constructor() {}

  allArms = [
    {
      id: 0,
      name: "Hulk Arm",
      url:
        "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1404/lineartestpilot140404348/27861342-flexing-monster-arm-cartoon.jpg"
    },
    {
      id: 1,
      name: "Werewolf Arm",
      url:
        "https://thumbs.dreamstime.com/z/halloween-monster-arm-creative-design-55369559.jpg"
    },
    {
      id: 2,
      name: "Floopy Arm",
      url:
        "https://img.clipartxtras.com/46a44eff1e6c0ae5d4db65fc85495e56_vector-of-cartoon-monster-arm-csp19392081-search-clip-art-monster-arms-clip-art_431-470.jpeg"
    },
    {
      id: 3,
      name: "Golem Arm",
      url: "http://blog-imgs-31.fc2.com/u/n/i/uniuni0216/20100503173426df9.png"
    },
    {
      id: 4,
      name: "Tentacle Arm",
      url:
        "http://www.livescience.com/images/i/000/055/385/original/octopus-tentacle.jpg"
    }
  ];

  armSource = new Subject<any>();
  arm$ = this.armSource.asObservable();

  selectedArms = this.allArms[0];
  selectArms(armsId) {
    this.selectedArms = this.allArms.filter(
      arm => arm.id === Number(armsId)
    )[0];
    this.armSource.next(this.selectedArms);
  }
  3;
}
