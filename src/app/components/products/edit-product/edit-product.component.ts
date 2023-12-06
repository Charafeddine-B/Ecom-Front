import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{


  productId!:number;
  productFormGroup!:FormGroup;

  constructor(private activatedRoute : ActivatedRoute, private productService:ProductService,private fb : FormBuilder){}
  ngOnInit(): void {
       this.productId = this.activatedRoute.snapshot.params['id'];
      this.productService.getProductById(this.productId).subscribe({
        next: (product) => {
          this.productFormGroup = this.fb.group({
            id: this.fb.control(product.id),
            name: this.fb.control(product.name,Validators.required),
            price: this.fb.control(product.price,[Validators.min(100)]),
            category: this.fb.control(product.category),
            stock: this.fb.control(product.stock)
            
          });
        },
        error: (error) => {
          console.log(error);
        }
      });
    }

    updateProduct() {
      let product : Product = this.productFormGroup.value;
      this.productService.updateProduct(product)
      .subscribe({
        next: (data) => {
          alert(JSON.stringify(data));
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}