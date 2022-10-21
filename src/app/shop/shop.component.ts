import { Component, OnInit } from '@angular/core';
import { ProdcutScale, ProductItem } from '../shared/models/product-item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  prodcutScale: ProdcutScale;
  products: ProductItem[] = [{
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }, {
    product_image : "assets/img/product-1.jpg",
    product_name  : "Air Pods",
    currency_symbol: "$",
    product_price : 300
  }];
  constructor() {
    this.prodcutScale = {
      large : 4,
      small : 6
    }
   }

  ngOnInit(): void {
  }

  changeScale(isLargeIcons : boolean): void {
    if (isLargeIcons) {
      this.prodcutScale.large = 4;
      this.prodcutScale.small = 6;
    } else {
      this.prodcutScale.large = 3;
      this.prodcutScale.small = 4;
    }
    
  }

}
