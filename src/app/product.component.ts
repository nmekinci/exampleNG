import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('samsung'),
    description: new FormControl('good'),
    price: new FormControl('1000'),
    imageUrl: new FormControl('1.jpg'),
  });

 onSubmit(){
  console.log(this.productForm.value);
 }

 updateProduct(){
  this.productForm.patchValue({
    name:'Iphone',
    price:'5000'
  })
 }
}
