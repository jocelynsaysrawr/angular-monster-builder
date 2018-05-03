import { Injectable } from '@angular/core';

@Injectable()
export class LegsService {

  constructor() { }

  legs: string[] = ['mark', 'steve', 'jesse', 'jocelyn'];

  getFirstLeg() {
    return this.legs[3];
  }
}
