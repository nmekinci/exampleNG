import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
  
  name: FormControl = new FormControl('samsung')
  description: FormControl = new FormControl('good')
  price: FormControl = new FormControl('1000')
  imageUrl: FormControl = new FormControl('1.jpg')

  updateName() {
    this.name.setValue('sam')
  }
}
