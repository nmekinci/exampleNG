import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  get name(){
    return this.productForm.get('name')
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  updateProduct() {
    this.productForm.patchValue({
      name: 'Iphone',
      price: '5000',
    });
  }
}
