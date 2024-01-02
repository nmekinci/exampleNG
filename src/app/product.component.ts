
import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";


@Component({
    selector: 'app',
    // template:`
    // <input [value]="email" (keyup.enter)="onKeyUp($event)">
    // `,
    template:`
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
    <br>
    <span>{{email}}</span>
    `,
    styleUrls: ['product.component.css']
})

export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    email = "email@email.com";
    
   
    // onKeyUp(event: Event) {
    //     const target = event.target as HTMLInputElement;
    //     if (target) {
    //         this.email = target.value;
    //         console.log(this.email);
    //     }
    // }
    onKeyUp() {
        
            console.log(this.email);
        }
    }
    
