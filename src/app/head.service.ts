import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IHead } from "./models/head.model";
import { Observable } from "rxjs/Observable";
import { map, filter, tap } from "rxjs/operators";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class HeadService {
  constructor(private http: HttpClient) {}

  private _url: string = "/assets/heads.json";
  private allHeads = [];

  headSource = new Subject<any>();
  head$ = this.headSource.asObservable();

  selectedHead = {
    id: 0,
    name: "Big Head",
    url: "https://thumbs.dreamstime.com/b/big-head-34-2530121.jpg",
    hp: 7,
    attack: 7,
    defence: 7
  };

  getAllHeads(): Observable<IHead[]> {
    return this.http.get<IHead[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

  selectHead(headID) {
    this.http
      .get<IHead[]>(this._url)
      .pipe(
        map(
          (headArray: IHead[]) =>
            headArray.filter((head: IHead) => head.id === headID)[0]
        )
      )
      .subscribe(
        headObj => {
          this.selectedHead = headObj;
          this.headSource.next(headObj);
        },
        err => {
          console.log(err);
        }
      );
  }
}
