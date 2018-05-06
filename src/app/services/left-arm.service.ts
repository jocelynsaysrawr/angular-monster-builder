import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ILeftArm } from "../models/left-arm.model";
import { Observable } from "rxjs/Observable";
import { map, filter, tap } from "rxjs/operators";
import { dbUrl } from "./url/databaseURL";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class LeftArmService {
  constructor(private http: HttpClient) {
    this.http.get<ILeftArm[]>(this._url).subscribe(value => {
      this.allLeftArms = value;
      this.selectLeftArm(1);
    });
  }

  _url: string = `${dbUrl}/left-arm`;
  allLeftArms: ILeftArm[];

  leftArmSource = new BehaviorSubject<any>("");
  leftArm$ = this.leftArmSource.asObservable();

  selectedLeftArm: ILeftArm;

  getAllLeftArms(): Observable<ILeftArm[]> {
    return this.http.get<ILeftArm[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    console.log("error is here");
    return Observable.throw(error.message || "Server Error");
  }

  selectArm(leftArmID) {
    this.selectedLeftArm = this.allLeftArms.filter(
      leftArm => leftArm.left_arm_id === Number(leftArmID)
    )[0];
    this.leftArmSource.next(this.selectedLeftArm);
  }
}