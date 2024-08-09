import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { carResponseModel } from '../../models/carResponseModel';
import {HttpClient} from '@angular/common/http';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{
 
  cars:Car[] = [];
  dataLoaded = false;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
      this.getCars();
  }

  getCars()  {
      this.carService.getCars().subscribe(response=>{this.cars = response.data
      this.dataLoaded = true;

      })
  }
}