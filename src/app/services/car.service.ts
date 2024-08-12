import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44326/api/";
  constructor(private httpClient:HttpClient) { }
  
  


  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Car/Get%20All%20Cars"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }



  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Car/GetcarsbybrandId?Id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
