import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('/api/things');
  }
  getOneRestaurant(id){
    return this.http.get(`/api/things/${id}`);
  }
  createNewRestaurant(newrestaurant){
    return this.http.post('/api/things/createThing', newrestaurant);
  }
  updateRestaurant(id, editrestaurant){
    return this.http.put(`/api/things/${id}/editThing`, editrestaurant);
  }
  getAllReviews(id){
    return this.http.get(`/api/${id}/reviews`);
  }
  createNewReview(id, reviewrestaurant){
    return this.http.put(`/api/things/${id}/createReview`, reviewrestaurant);
  }
  deleteRestaurant(id){
    return this.http.delete(`/api/things/${id}/deleteThing`);
  }
}
