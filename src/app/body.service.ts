import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class BodyService {
  currentBody: string;
  constructor() {}

  bodies = [
    {
      name: "badKing",
      imageSrc: "./src/app/navigation/body/assets/badKing.png"
    }
  ];

  imageUpdated = new EventEmitter<string>();

  setCurrentBody(index) {
    this.currentBody = this.bodies[index].imageSrc;
  }
}
