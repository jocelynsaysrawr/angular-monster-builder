import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { SelectService } from "../select.service";
import { BodyService } from "../body.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"]
})
export class DisplayComponent implements OnInit {
  selectedHead: Object;
  selectedArms: Object;
  constructor(
    public selectservice: SelectService,
    public bodyService: BodyService
  ) {
    this.selectedHead = selectservice.selectedHead;
    this.selectedArms = selectservice.selectedArms;
  }

  ngOnInit() {
    this.selectservice.head$.subscribe(head => {
      this.selectedHead = head;
    });
    this.selectservice.arm$.subscribe(arm => {
      this.selectedArms = arm;
    });
  }
}
