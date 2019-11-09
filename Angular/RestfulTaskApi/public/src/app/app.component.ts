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
  newTask: any;
  editTask: any;
  showEdit: boolean;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.title;
    this.content;
    this.details;
    this.onButtonClick();
    this.newTask = { title: "", description: "" };
    this.showEdit = false;
    this.editTask;

  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    let tempObservable = this._httpService.myNew(this.newTask);
    tempObservable.subscribe(data => {
      console.log("Sent the data!", this.newTask)
      //this.newone = data;
      this.onButtonClick();
      this.newTask = { title: "", description: "" };
    });
    // Reset this.newTask to a new, clean object.
  }

  onSubmitEdit() {
    // Code to send off the form data (this.editTask) to the Service
    let tempObservable = this._httpService.myEdit(this.editTask);
    tempObservable.subscribe(data => {
      console.log("Sent the data!", this.editTask)
      //this.newone = data;
      this.onButtonClick();
      this.showEdit = false;
    });
    
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

  onButtonClickParamsEdit(str: String): void {
    console.log(`Click event is working for details`);
    // our http response is an Observable, store it in a variable
    let tempObservable = this._httpService.byId(str);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => {
      console.log("Got all our one task!", data)
      this.details = data;
      this.showEdit = true;
    });
  }
  onButtonClickParamsDelete(str: String): void {
    // our http response is an Observable, store it in a variable
    // var myObj = {"_id": "5dc369fa0a20cb30c03fb5fb"}
    let tempObservable = this._httpService.remove(str);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => {
      console.log("Remove our task!", data)
      this.details = data;
      this.onButtonClick();
    });
  }
}
