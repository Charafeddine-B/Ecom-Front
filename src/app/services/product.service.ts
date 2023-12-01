import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  public getProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>('http://localhost:9000/products')
  }



  public deleteProduct(product:Product){
    return this.http.delete<any>(`http://localhost:9000/products/${product.id}`);
  }

  public saveProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`http://localhost:9000/products`, product);
  }
}
