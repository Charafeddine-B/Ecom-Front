import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {


  public productsState:any = {
    products:[],
    keyword: '',
    totalPages: 0,
    currentPage: 1,
    pageSize: 6,
 
  }
  constructor() { }
}
