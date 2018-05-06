import { Component, OnInit } from "@angular/core";
import { ArmService } from "../../../arm.service";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Component({
  selector: "app-right-arm",
  templateUrl: "./right-arm.component.html",
  styleUrls: ["./right-arm.component.scss"]
})
export class RightArmComponent implements OnInit {
  selectedArms: Object;
  RArmSrc$: Observable<string>;

  constructor(public armService: ArmService) {
    this.selectedArms = armService.selectedArms;
    this.RArmSrc$ = armService.arm$.pipe(map(value => value.RArmSrc));
  }

  ngOnInit() {}
}
