import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../../shared/models/product";
import { ShoppingCartService } from "../../../shared/services/shopping-cart.service";

@Component({
  selector: "app-product-quantity",
  templateUrl: "./product-quantity.component.html",
  styleUrls: ["./product-quantity.component.css"],
})

export class ProductQuantityComponent {
  @Input("product") product: Product;
  @Input("shopping-cart") shoppingCart;

  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;
    return this.shoppingCart.getQuantity(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }
}
