import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  keyword: string = '';
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 8;
  products: Array<Product> = [];
  totalP:number=0;

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.searchProducts();
  }

  searchProducts() {
    // this.products = this.productService.getProducts();
    this.productService.searchProducts(this.keyword,this.currentPage, this.pageSize).subscribe({
      next: (resp) => {
        this.products = resp.body as Product[];
        let totalProducts: number = parseInt(
          resp.headers.get('x-total-count')!
          
        );
        this.totalP = totalProducts
        this.totalPages = Math.floor(totalProducts / this.pageSize);
        if (totalProducts % this.pageSize != 0) {
          this.totalPages = this.totalPages + 1;
        }
      },
    });
  }

  handleDelete(product: Product) {
    if(confirm('are you sure')){
    this.productService.deleteProduct(product).subscribe({
      next: (data) => {
        this.products = this.products.filter((p) => p.id != product.id);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
    // this.products$ = this.productService.getProducts();
  }

  handleEdit(product: any): void {
    
  }

  handleGoto(page:number) {
    
    this.currentPage = page;
    this.searchProducts();

    }


}
