import { Component } from '@angular/core';
import {Product} from "./interfaces/product";
import {products} from "../data/product.data";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = products;
}
