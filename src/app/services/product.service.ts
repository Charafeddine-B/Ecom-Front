import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  constructor(private http:HttpClient) { }


  public searchProducts(keyword:string='',page : number =1,size:number =4){
    return this.http.get(`http://localhost:9000/products?name_like=${keyword}&_page=${page}&_limit=${size}`,{observe:'response'})
  }



  public deleteProduct(product:Product){
    return this.http.delete<any>(`http://localhost:9000/products/${product.id}`);
  }

  public saveProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`http://localhost:9000/products`, product);
  }

  getProductById(productId: number):Observable<Product> {
    return this.http.get<Product>(`http://localhost:9000/products/${productId}`)
    
  }
  public  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(`http://localhost:9000/products/${product.id}`,product)
  }
 
}
