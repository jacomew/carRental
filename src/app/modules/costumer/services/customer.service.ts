import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://cn76zhqgcj.execute-api.us-east-2.amazonaws.com";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private https: HttpClient) { }

  getCars() {
    return this.https.get(BASE_URL + '/api/customer/getallcars');
  }

  getCarbyId(carId: string) {
    return this.https.get(BASE_URL + '/api/customer/getcar/' + carId);
  }

  bookCarbyId(carId: string, reservationData: any) {
    return this.https.post(BASE_URL + '/api/customer/bookcar/' + carId, reservationData);
  }

  getBookings() {
    return this.https.get(BASE_URL + '/api/customer/getBookings');
  }



}
