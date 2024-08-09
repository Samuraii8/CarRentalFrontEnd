import { Injectable } from '@angular/core';
import { carResponseModel } from '../models/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44326/api/Car/Get%20All%20Cars";
  constructor(private httpClient:HttpClient) { }
  
  


  getCars():Observable<carResponseModel>{
    return this.httpClient.get<carResponseModel>(this.apiUrl);
  }
}
