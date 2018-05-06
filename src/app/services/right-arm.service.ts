import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IRightArm } from "../models/right-arm.model";
import { Observable } from "rxjs/Observable";
import { map, filter, tap } from "rxjs/operators";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class RightArmService {
  constructor(private http: HttpClient) {
    this.http.get<IRightArm[]>(this._url).subscribe(value => {
      this.allRightArms = value;
      this.selectRightArm(1);
    });
  }

  _url: string = `http://localhost:3000/right-arm`;
  allRightArms: IRightArm[];

  rightArmSource = new BehaviorSubject<any>("");
  rightArm$ = this.rightArmSource.asObservable();

  selectedRightArm: IRightArm;

  getAllRightArms(): Observable<IRightArm[]> {
    return this.http.get<IRightArm[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    console.log("error is here");
    return Observable.throw(error.message || "Server Error");
  }

  selectRightArm(rightArmID) {
    this.selectedRightArm = this.allRightArms.filter(
      rightArm => rightArm.right_arm_id === Number(rightArmID)
    )[0];
    this.rightArmSource.next(this.selectedRightArm);
  }
}
