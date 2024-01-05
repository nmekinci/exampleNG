import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';

@Component({
  selector: 'app',
  template: `
  {{text | summary:15}}
  `,
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
 text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
}
