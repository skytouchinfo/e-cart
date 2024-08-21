import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {TopHeaderComponent} from './top-header/top-header.component';
import {TopMenuComponent} from './header/top-menu/top-menu.component';
import {MainMenuComponent} from './header/main-menu/main-menu.component';
import {FormsModule} from "@angular/forms";
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from "./products/product/product.component";
import {SearchComponent} from "./products/product/search/search.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductsComponent,
    ProductComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
