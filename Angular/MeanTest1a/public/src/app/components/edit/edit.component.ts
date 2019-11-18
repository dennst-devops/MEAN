import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  submitted: boolean = false;
  restaurantToEdit: any;
  nameError: boolean = false;
  cuisineError: boolean = false;
  thisRestaurantID: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.restaurantToEdit = { name: "", cuisine: "" }

    this._route.params.subscribe((params: Params) => {
      this.thisRestaurantID = params['id']
      console.log(params['id'])
      this.getThisRestaurant(this.thisRestaurantID)
    });
  }

  getThisRestaurant(thisRestaurantID) {
    let observable = this._httpService.getOneRestaurant(thisRestaurantID);
    observable.subscribe((data: any) => {
      console.log("Restaurant retrieved.", data)
      this.restaurantToEdit = data.results;
    })
  }

  editThisRestaurant() {
    this.submitted = true;
    if (this.restaurantToEdit.restaurantname < 3) {
      this.nameError = true;
    }
    if (this.restaurantToEdit.cuisine < 3) {
      this.cuisineError = true;
    }
    else {
      let observable = this._httpService.updateRestaurant(this.restaurantToEdit._id, this.restaurantToEdit);
      observable.subscribe((data: any) => {
        console.log("Edited this Restaurant!", data)
        if (data.message != "error") {
          this._router.navigate(['/restaurants']);
        }
      });
    }
  }
}
