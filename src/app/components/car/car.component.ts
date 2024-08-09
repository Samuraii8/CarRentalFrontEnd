import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { carResponseModel } from '../../models/carResponseModel';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{
 
  cars:Car[] = [];

  carResponseModel:carResponseModel={
    data:this.cars,
    message:"",
    success:true
  };
   
  apiUrl = "https://localhost:44326/api/Car/Get%20All%20Cars";

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
      this.getCars();
  }

  getCars() {
      this.httpClient.get<carResponseModel>(this.apiUrl).subscribe((response)=> {this.cars = response.data});
  }
}