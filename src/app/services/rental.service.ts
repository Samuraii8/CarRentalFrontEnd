import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl1 = "https://localhost:44326/api/Rental/getrentaldetails";

  constructor(private httpClient : HttpClient) { }

  getRentals() : Observable<RentalResponseModel>
  {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl1)
  }
}