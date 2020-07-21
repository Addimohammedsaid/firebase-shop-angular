import { AuthService } from "./../../../shared/services/auth.service";
import { OrderService } from "./../../../shared/services/order.service";
import { Subscription } from "rxjs";
import { ShoppingCart } from "./../../../shared/models/shopping-cart";
import { ShoppingCartService } from "src/app/shared/services/shopping-cart.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Order } from "src/app/shared/models/order";
import { Router } from "@angular/router";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = {};
  cart$: ShoppingCart;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  userId: string;

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _orderService: OrderService,
    private _auth: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    let cart$ = await this._shoppingCartService.getCarte();
    this.cartSubscription = cart$.subscribe((e) => (this.cart$ = e));
    this.userSubscription = this._auth.user$.subscribe(
      (e) => (this.userId = e.uid)
    );
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart$);
    let success = await this._orderService.placeOrder(order);
    this.router.navigate(["/order-success", success.key]);
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
