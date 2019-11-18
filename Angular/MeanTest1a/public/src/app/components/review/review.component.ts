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
  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
// pull the obj, get the  info
  }


  // 
}
