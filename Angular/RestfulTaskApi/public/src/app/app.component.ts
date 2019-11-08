import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  content: any;
  details: any;
  myShow: boolean;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.title;
    this.content;
    this.details;
  }

  onButtonClick(): void {
    console.log(`Click event is working`);
    // our http response is an Observable, store it in a variable
    let tempObservable = this._httpService.getTasks();
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => {
      console.log("Got all our tasks!", data)
      this.content = data;
    });
  }

  onButtonClickParams(str: String): void {
    console.log(`Click event is working for details`);
    // our http response is an Observable, store it in a variable
    let tempObservable = this._httpService.byId(str);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => {
      console.log("Got all our one task!", data)
      this.details = data;
    });

  }
}
