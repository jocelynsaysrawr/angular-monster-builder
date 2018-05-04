import { Injectable } from '@angular/core';

@Injectable()
export class LegsService {

  constructor() { }

  showLegs() {
    return [
      { id: 1, url: "fakeshit.com" },
      { id: 2, url: "morefakeshit.com" }
    ]
  }
}
