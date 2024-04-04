import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://jntujn9rhl.execute-api.us-east-2.amazonaws.com";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private https: HttpClient) { }

  addCar(signupRequest: any){
    return this.https.post(BASE_URL+"/api/admin/addcar",signupRequest);
  }

  getCars() {
    return this.https.get(BASE_URL + '/api/admin/getcars');
  }

  deleteCarbyId(carId: string) {
    return this.https.delete(BASE_URL + '/api/admin/deletecar/' + carId);
  }

  getCarbyId(carId: string) {
    return this.https.get(BASE_URL + '/api/admin/getcar/' + carId);
  }

  updateCar(carId: string, carData: any) {
    return this.https.post(BASE_URL + '/api/admin/updatecar/' + carId, carData);
  }

  mostrarURL(){
    console.log(BASE_URL + '/api/admin/updatecar/');
  }

}
