import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { compileDeferResolverFunction } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {


  brands : Brand [] = [];
  currentBrand:Brand;
  dataLoaded = true;
  constructor(private brandService:BrandService) {}
  ngOnInit(): void {
    this.getBrands();

  }



  getBrands()  {
    this.brandService.getBrands().subscribe(response=>{this.brands = response.data
      this.dataLoaded = true;

    })

}
setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
}
getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
