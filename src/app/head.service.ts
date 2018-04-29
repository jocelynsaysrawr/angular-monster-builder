import { Injectable } from "@angular/core";

@Injectable()
export class HeadService {
  constructor() {}
  allHeads = [
    {
      name: "Big Head",
      url: "https://thumbs.dreamstime.com/b/big-head-34-2530121.jpg",
      hp: 7,
      attack: 7,
      defence: 7
    },
    {
      name: "Little Head",
      url: "https://i.ytimg.com/vi/rEWe7hQXBv8/maxresdefault.jpg",
      hp: 3,
      attack: 3,
      defence: 2
    },
    {
      name: "Wierd Head",
      url: "https://www.askideas.com/media/17/Funny-Weird-Head-Mask-Image.jpg",
      hp: 9,
      attack: 9,
      defence: 9
    },
    {
      name: "Shaq Head",
      url:
        "https://www.celebrity-cutouts.co.uk/wp-content/uploads/2017/02/shaquille-oneal-celebrity-mask.jpg",
      hp: 7,
      attack: 7,
      defence: 7
    }
  ];
  // getHeadNames() {
  //   return this.allHeads.map(e => e.name);
  // }
}
