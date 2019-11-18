import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  submitted: boolean = false;
  makeRestaurant: any;
  nameError: boolean = false;
  cuisineError: boolean = false;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.makeRestaurant = { restaurantname: "", cuisine: "" }
  }

  createThing() {
    this.submitted = true;
    if (this.makeRestaurant.restaurantname < 3) {
      this.nameError = true;
    }
    if (this.makeRestaurant.cuisine < 3) {
      this.cuisineError = true;
    }
    else {
      let observable = this._httpService.createNewRestaurant(this.makeRestaurant);
      observable.subscribe((data: any) => {
        console.log("Creating a new Restaurant!", data)
        this._router.navigate(['/restaurants']);
      });
    }
  }
}
