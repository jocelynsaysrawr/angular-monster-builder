import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ArmService {
  allArms = [
    {
      id: 0,
      name: "Hulk Arm",
      LArmSrc:
        "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1404/lineartestpilot140404348/27861342-flexing-monster-arm-cartoon.jpg",
      RArmSrc:
        "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1404/lineartestpilot140404348/27861342-flexing-monster-arm-cartoon.jpg"
    },
    {
      id: 1,
      name: "Werewolf Arm",
      LArmSrc:
        "https://thumbs.dreamstime.com/z/halloween-monster-arm-creative-design-55369559.jpg",
      RArmSrc:
        "https://thumbs.dreamstime.com/z/halloween-monster-arm-creative-design-55369559.jpg"
    },
    {
      id: 2,
      name: "Floopy Arm",
      LArmSrc:
        "https://img.clipartxtras.com/46a44eff1e6c0ae5d4db65fc85495e56_vector-of-cartoon-monster-arm-csp19392081-search-clip-art-monster-arms-clip-art_431-470.jpeg",
      RArmSrc:
        "https://img.clipartxtras.com/46a44eff1e6c0ae5d4db65fc85495e56_vector-of-cartoon-monster-arm-csp19392081-search-clip-art-monster-arms-clip-art_431-470.jpeg"
    },
    {
      id: 3,
      name: "Golem Arm",
      LArmSrc:
        "http://blog-imgs-31.fc2.com/u/n/i/uniuni0216/20100503173426df9.png",
      RArmSrc:
        "http://blog-imgs-31.fc2.com/u/n/i/uniuni0216/20100503173426df9.png"
    },
    {
      id: 4,
      name: "Tentacle Arm",
      LArmSrc:
        "http://www.livescience.com/images/i/000/055/385/original/octopus-tentacle.jpg",
      RArmSrc:
        "http://www.livescience.com/images/i/000/055/385/original/octopus-tentacle.jpg"
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
