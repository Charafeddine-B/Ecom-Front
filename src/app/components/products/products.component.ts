import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {


  constructor(
    private http: HttpClient,
    public productService: ProductService,
    private router:Router,
    public appState:AppStateService
  ) {}

  ngOnInit(): void {
    this.searchProducts();
  }

  searchProducts() {

    // this.products = this.productService.getProducts();
    this.productService.searchProducts(this.appState.productsState.keyword,this.appState.productsState.currentPage, this.appState.productsState.pageSize)
    .subscribe({
      next: (resp) => {
        let products = resp.body as Product[];
        let totalProducts: number = parseInt(resp.headers.get('x-total-count')!);
        // this.appState.productsState.totalProducts = totalProducts;

        let totlalPages = Math.floor(totalProducts / this.appState.productsState.pageSize);
        if (totalProducts % this.appState.productsState.pageSize != 0) {
          ++totlalPages;
        }
        this.appState.setProductState({
          products: products,
          totalProducts: totalProducts,
          totalPages: totlalPages,
          status: 'LOADED'

        })
      },
      error: (error) => {

        this.appState.setProductState({
          status: 'error',
          errorMessage: error.message
        })
      },
    });
  }

  handleDelete(product: Product) {
    if(confirm("Are you sure you want to delete this product?") == true) {
    this.productService.deleteProduct(product).subscribe({
      next: (data) => {
        this.appState.productsState.products = this.appState.productsState.products.filter((p:any) => p.id != product.id);
      },
      error: (error) => {
        console.log(error);
      },
    });
    // this.products$ = this.productService.getProducts();
  }}

  handleEdit(product: any): void {
   this.router.navigateByUrl(`/admin/edit/${product.id}`)
  }




  handleGoto(page:number) {

    this.appState.productsState.currentPage = page;
    this.searchProducts();

    }
}
