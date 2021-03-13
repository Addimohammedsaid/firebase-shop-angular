import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "src/app/shared/services/shopping-cart.service";
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { Observable } from "rxjs";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();    
  }

  async clearCart() {
    this.shoppingCartService.clearCart();
  }
}
