import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://qyu8cum3bf.execute-api.us-east-2.amazonaws.com";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private https: HttpClient) { }

  register(signupRequest: any){
    return this.https.post(BASE_URL+"/api/auth/signup",signupRequest);
  }
}
