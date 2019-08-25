import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable()
export class UserProfileService {

  constructor(private http : HttpClient) {}

  getUser()
  {
    this.http.get('assets/shipping.jason');
  }

}