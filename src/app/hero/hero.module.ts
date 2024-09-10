import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './hero-section/category-list/category-list.component';
import { ProductSliderComponent } from './hero-section/product-slider/product-slider.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  imports: [CommonModule, NzCollapseModule,NzCarouselModule],
  declarations: [
    CategoryListComponent,
    ProductSliderComponent,
    HeroSectionComponent,
  ],
  exports: [
    CategoryListComponent,
    ProductSliderComponent,
    HeroSectionComponent,
  ],
})
export class HeroModule {}
