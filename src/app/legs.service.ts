import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LegsService {


  legs = [
    { legs_id: 1, name: "muscle leg", legs_source: "https://www.t-nation.com/system/publishing/articles/10004697/original/A-New-Trick-for-Building-Your-Legs.jpg?1491942177" },
    { legs_id: 2, name: "banana leg", legs_source: "https://previews.123rf.com/images/hqrloveq/hqrloveq1511/hqrloveq151100075/47397619-two-bananas.jpg" },
    {
      legs_id: 3, name: "robot leg", legs_source:
        "https://i.pinimg.com/736x/cf/29/8e/cf298e98423028490309e1e655d31f30.jpg"
    }
  ]

  legsSrc = new BehaviorSubject<any>('');
  legs$ = this.legsSrc.asObservable();

  currentLegs = this.legs[0];


  constructor() {
    this.setCurrentLegs(this.currentLegs.legs_id);
  }

  setCurrentLegs(legsID) {
    console.log("heres the legs_id", legsID)
    this.currentLegs = this.legs.filter(
      legs => legs.legs_id === Number(legsID)
    )[0];
    this.legsSrc.next(this.currentLegs);
  }

}


