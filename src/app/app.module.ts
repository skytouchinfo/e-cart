import { NzInputModule } from 'ng-zorro-antd/input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { SearchComponent } from './products/product/search/search.component';
import { FilterComponent } from './products/filter/filter.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { ImagePreloadDirective } from './directives/imagePreload.directive';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { HeroModule } from './hero/hero.module';
import { HeroComponent } from './hero/hero.component';
import { NewProductComponent } from './products/new-product/new-product.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductsComponent,
    ProductComponent,
    SearchComponent,
    FilterComponent,
    ImagePreloadDirective,
    ProductDetailComponent,
    HeroComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzButtonModule,
    NzAutocompleteModule,
    NzDrawerModule,
    NzCardModule,
    NzTagModule,
    NzBadgeModule,
    NzTreeModule,
    NzCollapseModule,
    HeroModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
  
export class AppModule {}
