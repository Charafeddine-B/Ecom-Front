import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

  
})
export class ProductsComponent implements OnInit {
 
  constructor(private http:HttpClient,private productService:ProductService){}
  products :Array<Product> = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe({next:value => this.products = value});
  }

  handleDelete(product:Product){

    this.productService.deleteProduct(product)
    .subscribe({
        next : data => {
          this.products = this.products.filter(p=>p.id!= product.id)
            
        },
        error : error => {
          console.log(error);
          
        }
    });
    // this.products$ = this.productService.getProducts();
  }
  
  
  
  
  
  
  handleEdit(product: any): void {

  }

}
