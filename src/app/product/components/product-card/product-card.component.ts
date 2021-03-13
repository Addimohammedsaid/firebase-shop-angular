import { ShoppingCartService } from "../../../shared/services/shopping-cart.service";
import { Product } from "../../../shared/models/product";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
})
export class ProductCardComponent {
  @Input("product") product: Product;
  @Input("showActions") showActions = false;
  @Input("shoppingCart") shoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;
    return this.shoppingCart.getQuantity(this.product);
  }

  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }
}
