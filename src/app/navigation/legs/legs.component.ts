import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legs',
  templateUrl: './legs.component.html',
  styleUrls: ['./legs.component.scss']
})
export class LegsComponent implements OnInit {

  allowNewLegs = false;
  legsCreationStatus = 'No legs were created!';

  constructor() {
    setTimeout(() => {
      this.allowNewLegs = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateLegs() {
    this.legsCreationStatus = 'Legs were added!!!!';
  }

}
