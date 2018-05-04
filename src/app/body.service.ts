import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BodyService {
  constructor() {
    this.setCurrentBody(this.currentBody.id);
  }

  bodies = [
    {
      id: 101,
      name: "Bad King Body",
      imageSrc: "./assets/body/badKing.png"
    },
    {
      id: 102,
      name: "Donut Body",
      imageSrc: "./assets/body/Donut.png"
    }
  ];

  bodySrc = new BehaviorSubject<any>("");
  body$ = this.bodySrc.asObservable();

  currentBody = this.bodies[0];

  setCurrentBody(bodyId) {
    console.log("should be setting body here", bodyId);
    this.currentBody = this.bodies.filter(
      body => body.id === Number(bodyId)
    )[0];
    this.bodySrc.next(this.currentBody);
  }
}
