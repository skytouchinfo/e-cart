import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './hero-section/category-list/category-list.component';
import { ProductSliderComponent } from './hero-section/product-slider/product-slider.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CategoryListComponent, ProductSliderComponent],
  exports: [CategoryListComponent, ProductSliderComponent],
})
export class HeroModule {}
