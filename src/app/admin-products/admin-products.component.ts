import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent {
  selectedProduct!: Product;
  products;
  model: ProductRepository;
  constructor(){
    this.model = new ProductRepository()
    this.products = this.model.getProducts()
  }


  getSelected(product: Product): boolean{
    // console.log(product.name === this.selectedProduct);
    return product == this.selectedProduct
  }

  editProduct( product: Product) {
    this.selectedProduct = product;
  }
}

  // onChange( event: Event){
  //   const target = event.target as HTMLInputElement
  //   this.selectedProduct = target.value 
  // }
  // onChange1( pName: Element){
  //   const target = pName as HTMLInputElement
  //   this.selectedProduct = target.value 
  //}
