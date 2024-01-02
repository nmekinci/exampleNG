
import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: 'app',
    templateUrl:'product.component.html',
    styleUrls: ['product.component.css']
})

export class ProductComponent {
    model: ProductRepository = new ProductRepository()
    disabled = false;

    getClasses(id: number): string {
        let product = this.model.getProductById(id);
         return ( (product?.price ?? 0) <= 1000 ? "bg-info" : "bg-warning") + " m-2 p-2"
    }

    getClassMap(id: number): DecoratorMetadataObject{
        let product = this.model.getProductById(id);
         return {
            "bg-info": (product?.price ?? 0) <= 1000,
            "bg-warning": (product?.price ?? 0) > 1000,
            "text-center text-white": product?.name == "Apple"
         }
    }



}