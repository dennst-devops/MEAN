import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRestaurants: any;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getAllRestaurants();
  }

  getAllRestaurants(){
    let obs = this.httpService.getAll();
    obs.subscribe((data: any) => {
      // console.log("Got all our restaurnts!", data.results)
      this.allRestaurants = data.results;
    })
  }

  deleteThisRestaurant(id){
    let obs = this.httpService.deleteRestaurant(id);
    obs.subscribe((data: any) => {
      console.log("Deleted the Restaurant!", data)
      this.getAllRestaurants();
    })
  }

}
