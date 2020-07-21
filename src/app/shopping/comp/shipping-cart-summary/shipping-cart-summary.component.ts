import { ShoppingCart } from "./../../../shared/models/shopping-cart";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-shipping-cart-summary",
  templateUrl: "./shipping-cart-summary.component.html",
  styleUrls: ["./shipping-cart-summary.component.css"],
})
export class ShippingCartSummaryComponent implements OnInit {
  @Input("cart") cart: ShoppingCart;

  constructor() {}

  ngOnInit() {}
}
