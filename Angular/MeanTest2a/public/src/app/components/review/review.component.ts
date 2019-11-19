import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Thing } from '../../../../../server/models/models.js';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  showRestaurantReviews: any;
  thisRestaurantID: any;
  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showRestaurantReviews = { _id: "", name: "", cuisine: "" }
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
  deleteThisRestaurant(id){
    let obs = this.httpService.deleteRestaurant(id);
    obs.subscribe((data: any) => {
      console.log("Deleted the Restaurant!", data)
      // this.getAllRestaurants();
      this.router.navigate(['/restaurants']);
    })
  }

}
