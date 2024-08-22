import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCount } from '../interfaces/product';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() productCount: ProductCount = {
    inStock: 0,
    total: 0,
    outOfStock: 0,
  };

  selectedRadionButtonValue: string = 'All';
  @Output() radioBtnEvent = new EventEmitter<string>();

  constructor() {}

  onRadionBtnChange(): void {
    this.radioBtnEvent.emit(this.selectedRadionButtonValue);
    console.log('selectedRadionButtonValue', this.selectedRadionButtonValue);
  }
}
