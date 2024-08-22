import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../interfaces/product";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') product?: Product;
  discountPercentage: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.calculateDiscountPercentage();
  }

  calculateDiscountPercentage(): number {
    if (this.product && this.product.discountPrice) {
      const totalPrice: number = this.product.price + this.product.discountPrice;
      return Number(((100 * this.product.discountPrice) / totalPrice).toFixed(0));
    }
    return 0;
  }


}
