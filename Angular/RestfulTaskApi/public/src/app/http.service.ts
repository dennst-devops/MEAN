import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }

  getTasks() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got all our tasks!", data));
  }
  byId() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/byId/:id');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our one task!", data));
  }
  remove() {
    // our http response is an Observable, store it in a variable
    // var myObj = {"_id": "5dc369fa0a20cb30c03fb5fb"}
    let tempObservable = this._http.delete('/remove/:id');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Remove our task!", data));
  }
  myNew() {
    var myObj = {
    }
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.post('/new', myObj);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("New our task!", data));
  }

}