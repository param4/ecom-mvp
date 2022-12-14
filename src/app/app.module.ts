import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home/components/home-banner/home-banner.component';
import { HomeTopCategoriesComponent } from './home/components/home-top-categories/home-top-categories.component';
import { HomeTopProductsComponent } from './home/components/home-top-products/home-top-products.component';
import { HomeServicesComponent } from './home/components/home-services/home-services.component';
import { ShopComponent } from './shop/shop.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeBannerComponent,
    HomeTopCategoriesComponent,
    HomeTopProductsComponent,
    HomeServicesComponent,
    ShopComponent,
    PageBannerComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
