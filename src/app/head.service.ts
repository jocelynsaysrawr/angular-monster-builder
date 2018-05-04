import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IHead } from "./models/head.model";
import { Observable } from "rxjs/Observable";
import { map, filter, tap } from "rxjs/operators";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class HeadService {
  constructor(private http: HttpClient) {
    this.http.get<IHead[]>(this._url).subscribe(value => {
      this.allHeads = value;
      this.selectHead(1);
    });
  }

  _url: string = "http://localhost:3000";
  allHeads: IHead[];

  headSource = new BehaviorSubject<any>("");
  head$ = this.headSource.asObservable();

  selectedHead: IHead;

  getAllHeads(): Observable<IHead[]> {
    return this.http.get<IHead[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

  selectHead(headID) {
    this.selectedHead = this.allHeads.filter(
      head => head.head_id === Number(headID)
    )[0];
    this.headSource.next(this.selectedHead);
  }
}
