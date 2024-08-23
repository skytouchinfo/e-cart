import { Component } from '@angular/core';
import { Product, ProductCount } from './interfaces/product';
import { products } from '../data/product.data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = products;
  stockCount: ProductCount;
  selectedFilter: string = 'All';
  searchFilterText: string = '';
  options: string[] = this.products
    .filter((product) =>
      product.name.toLowerCase().includes(this.searchFilterText.toLowerCase())
    )
    .map((product) => product.name);

  constructor() {
    this.stockCount = this.calculateStockCounts();
  }

  private calculateStockCounts(): ProductCount {
    return this.products.reduce(
      (acc: ProductCount, product: Product) => {
        if (product.is_in_inventory) {
          acc.inStock += 1;
        } else {
          acc.outOfStock += 1;
        }
        acc.total += 1;
        return acc;
      },
      { inStock: 0, outOfStock: 0, total: 0 }
    );
  }

  onFilterChange($event: string) {
    this.selectedFilter = $event;
  }

  onSearchFilter($event: string) {
    this.searchFilterText = $event;
    console.log(
      '🚀 ~ ProductsComponent ~ onSearchFilter ~ event:',
      this.searchFilterText
    );
    if (this.searchFilterText) {
      this.options = this.products
        .filter((product) =>
          product.name
            .toLowerCase()
            .includes(this.searchFilterText.toLowerCase())
        )
        .map((product) => product.name);
    } else {
    }
  }
}
