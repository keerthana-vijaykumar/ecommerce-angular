import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
// import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClient],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  productList: any [] = [];
  constructor(private productService: ProductService){ // used for initialization

  }

  ngOnInit(): void { // used for api calls
    debugger;
    this.loadAllProducts();
  }

  loadAllProducts(){
    debugger;
    // this.productService.getAllProducts().subscribe((result: any)=>{
    //   this.productList = result.data;
    // })
  }

}
