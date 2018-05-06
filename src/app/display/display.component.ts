<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { BodyService } from "../body.service";
=======
import { Component, OnInit } from '@angular/core';
import { IHead } from '../models/head.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
>>>>>>> auth

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
<<<<<<< HEAD
  selectedHead: Object;
  constructor(
    public headService: HeadService,
    public bodyService: BodyService
  ) {
    this.selectedHead = headService.selectedHead;
  }

  ngOnInit() {
    this.headService.head$.subscribe(head => {
      this.selectedHead = head;
    });
  }
=======
  selectedArms: Object;
  constructor() {}

  ngOnInit() {}
>>>>>>> auth
}
