import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "src/app/shared/services/shopping-cart.service";

@Component({
  selector: "app-shipping-cart",
  templateUrl: "./shipping-cart.component.html",
  styleUrls: ["./shipping-cart.component.css"],
})
export class ShippingCartComponent implements OnInit {
  cart$: any;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCarte();
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
}
