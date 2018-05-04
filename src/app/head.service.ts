import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class HeadService {
  constructor() {}

  allHeads = [
    {
      id: 0,
      name: "Big Head",
      url: "https://thumbs.dreamstime.com/b/big-head-34-2530121.jpg",
      hp: 7,
      attack: 7,
      defence: 7
    },
    {
      id: 1,
      name: "Little Head",
      url: "https://i.ytimg.com/vi/rEWe7hQXBv8/maxresdefault.jpg",
      hp: 3,
      attack: 3,
      defence: 2
    },
    {
      id: 2,
      name: "Wierd Head",
      url: "https://www.askideas.com/media/17/Funny-Weird-Head-Mask-Image.jpg",
      hp: 9,
      attack: 9,
      defence: 9
    },
    {
      id: 3,
      name: "Shaq Head",
      url:
        "https://www.celebrity-cutouts.co.uk/wp-content/uploads/2017/02/shaquille-oneal-celebrity-mask.jpg",
      hp: 7,
      attack: 7,
      defence: 7
    }
  ];

  headSource = new Subject<any>();
  head$ = this.headSource.asObservable();

  selectedHead = this.allHeads[0];

  selectHead(headID) {
    this.selectedHead = this.allHeads.filter(e => e.id === Number(headID))[0];
    this.headSource.next(this.selectedHead);
  }
}
