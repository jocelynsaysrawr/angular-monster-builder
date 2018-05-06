import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { ArmService } from "../arm.service";
import { BodyService } from "../body.service";
import { SelectService } from "../select.service";
import { IHead } from "../models/head.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"]
})
export class DisplayComponent implements OnInit {
  selectedArms: Object;
  selectedHead: IHead;
  headSource$: Observable<string>;
  constructor(
    public headService: HeadService,
    public armService: ArmService,
    public bodyService: BodyService
  ) {
    this.selectedArms = armService.selectedArms;
    this.headSource$ = headService.head$.pipe(map(value => value.head_src));
  }

  ngOnInit() {
    this.armService.arm$.subscribe(arm => {
      this.selectedArms = arm;
    });
  }
}
