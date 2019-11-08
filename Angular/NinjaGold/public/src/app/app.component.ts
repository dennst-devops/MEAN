import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// All functions under this line:
export class AppComponent {
  gold: number;
  amount: number;
  name: string;
  log: string;
  showLog: boolean;
  newLog: any;

  constructor(private _httpService: HttpService) { }


  ngOnInit() {
    this.gold = 0;
    this.amount = 0;
    this.name = "";
    this.log = "";
    this.showLog=false;
    this.newLog = "";
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  farmGold() {
    this.name = "Farm"
    this.amount = this.getRandomInt(2, 5);
    this.gold += this.amount;
    this.showLog=true;
    this.log = "You earned " +this.amount+ " gold at the farm";

    // send the data
    this.newLog = {log: "this.log", amount: "this.amount"}
    this._httpService.postlogs(this.newLog);

    // get the data
    let Observable = this._httpService.getlogs();
    Observable.subscribe((data: any) => {
      console.log("Got our logs from the db!", data);

    })
  }

  farmCave() {
    this.name = "Cave"
    this.amount = this.getRandomInt(5, 10);
    this.gold += this.amount;
    this.showLog=true;
    this.log = "You earned " +this.amount+ " gold at the cave";
  }

  farmCasino() {
    this.name = "Casino"
    this.amount = this.getRandomInt(-100, 100);
    this.gold += this.amount;
    this.showLog=true;
    if (this.amount <= 0) {
      this.log = "You lost " +this.amount*-1+ " gold at the casino";
    }else {
      this.log = "You earned " +this.amount+ " gold at the casino";
    }
  }

  farmHouse() {
    this.name = "House"
    this.amount = this.getRandomInt(7, 15);
    this.gold += this.amount;
    this.showLog=true;
    this.log = "You earned " +this.amount+ " gold at the house";

    // All functions above this line
  }
}