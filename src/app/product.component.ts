import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
  model: ProductRepository = new ProductRepository();

  newProduct: Product = new Product();

  //  productName : string | undefined = this.model.getProductById(1)?.name

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('New Pro' + this.jsonProduct);
  }

  log(x: any) {
    console.log(x);
  }

  formSubmitted:boolean = false;

  submitForm(form:NgForm){
    this.formSubmitted = true;
    if(form.valid){
      this.addProduct(this.newProduct)
      this.newProduct = new Product()
      form.reset()
      this.formSubmitted = false;
    }
  }

  getValidationErrors(state: any) {
    let ctrlName: string = state.name;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You  must enter a ${ctrlName}`);
            break;
          case 'minlength':
            messages.push(`min 3 chars ${ctrlName}`);
            break;
          case 'pattern':
            messages.push(`only chars and spaces ${ctrlName}`);
            break;
        }
      }
    }
    return messages;
  }


}
