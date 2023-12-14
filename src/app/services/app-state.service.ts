import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  constructor() { }

  public productsState:any = {
    products:[],
    keyword: '',
    totalPages: 0,
    currentPage: 1,
    pageSize: 5,
    totalProducts: 0,
    status: 'LOADING',
    errorMessage: ''

  }
  public authState:any = {
    username: undefined,
    roles: undefined,
    isAuthenticated: false,
    token: undefined,
  }
  public setProductState(state: any) {
    this.productsState = {...this.productsState, ...state};
  }
  public setAuthState(state: any) {
    this.authState = {...this.authState, ...state};
  }
  // public totalProducts(): number {
  //   return this.productsState.products.length;
  // }

}
