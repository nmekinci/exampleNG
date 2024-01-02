
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
    
    // onKeyUp($event:KeyboardEvent){
    //     if($event.keyCode === 13) {
    //         console.log('Enter pressed');
    //     }
    //     if($event.key === 'Enter'){
    //         console.log('Enter with key');
    //     }
    // }

    // onKeyUp($event : Event){
    //     const target = $event.target as HTMLInputElement;
    //     console.log(target?.value);
    // }
    onKeyUp(email: string ){
        
        console.log(email);
    }
    
}