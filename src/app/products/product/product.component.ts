import {Component, Input} from '@angular/core';
import {Product} from "../interfaces/product";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    @Input('product') product?:Product
}
