import { Component, OnInit } from "@angular/core";
import { ArmService } from "../../../arm.service";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Component({
  selector: "app-left-arm",
  templateUrl: "./left-arm.component.html",
  styleUrls: ["./left-arm.component.scss"]
})
export class LeftArmComponent implements OnInit {
  selectedArms: Object;
  LArmSrc$: Observable<string>;

  constructor(public armService: ArmService) {
    this.selectedArms = armService.selectedArms;
    this.LArmSrc$ = armService.arm$.pipe(map(value => value.LArmSrc));
  }

  ngOnInit() {}
}
