import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  constructor(private fb:FormBuilder , private ProductService:ProductService) { }


saveProduct() {
  let product :Product = this.productForm.value
  this.ProductService.saveProduct(product).subscribe({
    next : data => {
      alert(JSON.stringify(data))

    },
    error : error => {
      console.log(error);

    }
  })


}

  public productForm!:FormGroup;


  ngOnInit(): void {
   this.productForm = this.fb.group({
      name:this.fb.control('',[Validators.required]),
      price:this.fb.control('',[Validators.required]),
      category:this.fb.control(''),
      quantity:this.fb.control(''),
      stock:this.fb.control('')
   })
  }


}
