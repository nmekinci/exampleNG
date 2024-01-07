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
    return product == this.selectedProduct
  }

  editProduct( product: Product) {
    this.selectedProduct = product;
  }
  saveChanges(name:string, desc:string, price: number, url:string){
    // const p = this.model.getProductById((this.selectedProduct.id != undefined) ? this.selectedProduct.id :0)
    const p = this.model.getProductById(this.selectedProduct.id!);
    p!.name = name;
    p!.price = price;
    p!.imageUrl = url;
    p!.description = desc;
    this.selectedProduct = {
      name:'',
      price:0,
      imageUrl:'',
      description:''
    };
  }
}


