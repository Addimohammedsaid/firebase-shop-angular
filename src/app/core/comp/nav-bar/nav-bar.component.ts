import { ShoppingCartItem } from "./../../../shared/models/shopping-cart-item";
import { ShoppingCart } from "./../../../shared/models/shopping-cart";
import { ShoppingCartService } from "./../../../shared/services/shopping-cart.service";
import { AuthService } from "./../../../shared/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { AppUser } from "src/app/shared/models/app-user";
import { map } from "rxjs/operators";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  cart$: any;

  constructor(
    private _auth: AuthService,
    private _shoppingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this._auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
    this.cart$ = await this._shoppingCartService.getCarte();
  }

  logout() {
    this._auth.logout();
  }
}
