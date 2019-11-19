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
  quantityError: boolean = false;
  priceError: boolean = false;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.makeRestaurant = { name: "", quantity: "", price: "" }
  }

  createThing() {
    this.submitted = true;
    if (this.makeRestaurant.name.length < 3) {
      this.nameError = true;
    }
    if (this.makeRestaurant.price == null) {
      this.priceError = true;
    } else if (this.makeRestaurant.price < 0 || this.makeRestaurant.price.length < 1) {
      this.priceError = true;
    }
    if (this.makeRestaurant.quantity == null){
      this.quantityError = true;
    } else if (this.makeRestaurant.quantity < 0 || this.makeRestaurant.quantity.length < 1) {
      this.quantityError = true;
    } else {
      let observable = this._httpService.createNewRestaurant(this.makeRestaurant);
      observable.subscribe((data: any) => {
        console.log("Creating a new Product!", data)
        this._router.navigate(['/restaurants']);
      });
    }
  }
}
