import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app',
  templateUrl:'product.component.html' ,
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
 model: ProductRepository = new ProductRepository();

 newProduct :Product = new Product()

//  productName : string | undefined = this.model.getProductById(1)?.name 

get jsonProduct() {
  return JSON.stringify(this.newProduct)
}

addProduct(p: Product) {
  console.log("New Pro" + this.jsonProduct);
}


}
