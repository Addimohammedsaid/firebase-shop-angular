import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../models/product";
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  selector: "app-product-qunatity",
  templateUrl: "./product-qunatity.component.html",
  styleUrls: ["./product-qunatity.component.css"],
})
export class ProductQunatityComponent {
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
