import {Component, Input} from '@angular/core';
import {Product} from "../interfaces/product";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    @Input('products') product?:Product
}
