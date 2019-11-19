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
  quantityError: boolean = false;
  priceError: boolean = false;
  thisRestaurantID: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.restaurantToEdit = { name: "", quantity: "", price: "" }

    this._route.params.subscribe((params: Params) => {
      this.thisRestaurantID = params['id']
      console.log(params['id'])
      this.getThisRestaurant(this.thisRestaurantID)
    });
  }

  getThisRestaurant(thisRestaurantID) {
    let observable = this._httpService.getOneRestaurant(thisRestaurantID);
    observable.subscribe((data: any) => {
      console.log("Product retrieved.", data)
      this.restaurantToEdit = data.results;
    })
  }

  editThisRestaurant() {
    this.submitted = true;
    if (this.restaurantToEdit.name.length < 3) {
      this.nameError = true;
    }
    if (this.restaurantToEdit.price == null){
      this.priceError = true;
    } else if (this.restaurantToEdit.price < 0 || this.restaurantToEdit.price.length < 1) {
      this.priceError = true;
    }
    if (this.restaurantToEdit.quantity == null) {
      this.priceError = true;
    } else if (this.restaurantToEdit.quantity < 0 || this.restaurantToEdit.quantity.length < 1) {
      this.quantityError = true;
    } else {
      let observable = this._httpService.updateRestaurant(this.restaurantToEdit._id, this.restaurantToEdit);
      observable.subscribe((data: any) => {
        console.log("Edited this Product!", data)
        if (data.message != "error") {
          this._router.navigate(['/restaurants']);
        }
      });
    }
  }
}
