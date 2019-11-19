import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  thisRestaurantID: any;
  name: any;
  restaurant: any;
  nameError: boolean = false;
  ratingError: boolean = false;
  descriptionError: boolean = false;
  rating: number;
  makeReview = { name: "", rating: 3, review: "" };
  showRestaurantReviews: any;
  submitted: boolean = false;

  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showRestaurantReviews = { restaurantname: "" }
    this.route.params.subscribe((params: Params) => {
      this.thisRestaurantID = params['id']
      console.log(params['id'])
      this.getThisRestaurant(this.thisRestaurantID)
    });
  }
  getThisRestaurant(thisRestaurantID) {
    let observable = this.httpService.getOneRestaurant(thisRestaurantID);
    observable.subscribe((data: any) => {
      console.log("Restaurant retrieved.", data)
      this.showRestaurantReviews = data.results;
    })
  }
  createReview() {
    this.submitted = true;
    if (this.makeReview.name.length < 3) {
      this.nameError = true;
    } 
    if (this.makeReview.review.length < 3) {
      this.descriptionError = true;
    } else {
      console.log(this.makeReview.name);
      let obs = this.httpService.createNewReview(this.thisRestaurantID, this.makeReview);
      obs.subscribe((data: any) => {
        console.log("Creating a new review!", data)
        this.router.navigate(['/restaurants']);
      });
    }
  }
}
