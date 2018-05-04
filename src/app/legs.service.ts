import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LegsService {

  constructor() { }

  legs = [
    { legs_id: 1, name: "muscle leg", legs_source: "https://www.t-nation.com/system/publishing/articles/10004697/original/A-New-Trick-for-Building-Your-Legs.jpg?1491942177" },
    { legs_id: 2, name: "banana leg", legs_source: "https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg" }
  ]

  legsSrc = new BehaviorSubject<any>('');
  legs$ = this.legsSrc.asObservable();

  currentLegs = this.legs[0];

  setCurrentLegs(legsID) {
    console.log("heres the legs_id", legsID)
    this.currentLegs = this.legs.filter(
      legs => legs.legs_id === Number(legsID)
    )[0];
    this.legsSrc.next(this.currentLegs);
  }

}


