import { Component, OnInit } from '@angular/core';
import { LegsService } from '../legs/legs.service'

@Component({
  selector: 'app-legs',
  templateUrl: './legs.component.html',
  styleUrls: ['./legs.component.scss']
})
export class LegsComponent implements OnInit {
  legs: string;
  testValue = "";
  allowNewLegs = false;
  legsCreationStatus = 'For Gods sake give him some legs';
  testthings = false;


  constructor(private LegsService: LegsService) {

  }

  ngOnInit() {
    this.legs = this.LegsService.getFirstLeg();
  }

  onCreateLegs() {
    this.legsCreationStatus = 'Legs were added!!!!';
    this.allowNewLegs = true;
    this.testthings = true;
  }

  onDeleteLegs() {
    this.legsCreationStatus = `YOU CUT OFF THE LEGS YOU SICK FUCK`;
    this.allowNewLegs = false;
  }

  // updateThing(event: Event) {
  //   this.testValue = (<HTMLInputElement>event.target).value
  // }



}
