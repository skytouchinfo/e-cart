import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  @Input() selectedProduct?: Product;
  @Input() visible: boolean = false;
  @Output() closeDrawerEvent = new EventEmitter<void>();

  size: 'large' | 'default' = 'default';

  get title(): string {
    return `Product Details`;
  }

  showDefault(): void {
    this.size = 'default';
    this.open();
  }

  showLarge(): void {
    this.size = 'large';
    this.open();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.closeDrawerEvent.emit();
  }
}
