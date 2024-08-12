import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl1 = "https://localhost:44326/api/Rental/getrentaldetails";

  constructor(private httpClient : HttpClient) { }

  getRentals() : Observable<ListResponseModel<Rental>>
  {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl1)
  }
}