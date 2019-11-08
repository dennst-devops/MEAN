import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getlogs();
  }
  getlogs() {
    // return this._HttpService.post("/logs");
    let myLog = this._http.get('/logs');
    console.log("got the log from the db!");
    return myLog;
  }
  postlogs(newLog: any) {
    // return this._HttpService.post("/logs");
    let myPLog = this._http.post('/logs', newLog);
    console.log("got the log from the db!");
    return myPLog;
  }
}
