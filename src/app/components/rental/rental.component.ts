import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit {

  rentals : Rental[] = [];
  dataLoaded = true; 

  constructor(private rentalService : RentalService) {}

  ngOnInit(): void {
    this.getRentals()
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{this.rentals = response.data
      this.dataLoaded = true;
    })
  }

}