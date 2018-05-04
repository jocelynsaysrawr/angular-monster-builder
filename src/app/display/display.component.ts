import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { ArmService } from "../arm.service";
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
    public headService: HeadService,
    public armService: ArmService,
    public bodyService: BodyService
  ) {
    this.selectedHead = headService.selectedHead;
    this.selectedArms = armService.selectedArms;
  }

  ngOnInit() {
    this.headService.head$.subscribe(head => {
      this.selectedHead = head;
    });
    this.armService.arm$.subscribe(arm => {
      this.selectedArms = arm;
    });
  }
}
