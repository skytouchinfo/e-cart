import { ChangeDetectorRef, Component } from '@angular/core';
import { Product, ProductCount } from './interfaces/product';
import { products } from '../data/product.data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = products;
  selectedProduct?: Product;
  stockCount: ProductCount;
  selectedFilter: string = 'All';
  searchFilterText: string = '';
  options: string[] = this.products
    .filter((product) =>
      product.name.toLowerCase().includes(this.searchFilterText.toLowerCase())
    )
    .map((product) => product.name);
  showProduct: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {
    this.stockCount = this.calculateStockCounts();
    console.log('selectedProduct', this.selectedProduct);
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

  handleProduct(product: Product) {
    console.log("🚀 ~ ProductsComponent ~ handleProduct ~ product:", product)
    this.selectedProduct = product;
    this.showProduct = !this.showProduct;
    this.cdr.detectChanges();
  }

  closeDrawer() {
    this.showProduct = false;
  }

  onFilterChange($event: string) {
    this.selectedFilter = $event;
  }

  onSearchFilter($event: string) {
    this.searchFilterText = $event;
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
