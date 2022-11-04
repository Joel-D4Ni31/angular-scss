import { Component, OnInit } from '@angular/core';
import { DetailSale } from 'src/app/model/detalleVenta.model';
import { Product } from 'src/app/model/product.model';
import { ShopCartService } from 'src/app/services/shop-cart.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [
  ];
  itemsCart: DetailSale[] = [
  ];
  constructor(private storeServices: StoreService, private shopCartService: ShopCartService){
    this.products = storeServices.products;
    this.itemsCart = shopCartService.carrito;
  }
  ngOnInit(): void {
  }

}
