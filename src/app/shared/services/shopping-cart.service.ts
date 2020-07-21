import { Observable } from "rxjs";
import { ShoppingCart } from "./../models/shopping-cart";
import { Product } from "./../models/product";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { take, map } from "rxjs/internal/operators";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list("/shopping-cart/").push({
      dateCreated: new Date().getTime(),
    });
  }

  async getCarte(): Promise<Observable<ShoppingCart>> {
    let carteId = await this.getOrCreateCarteId();
    return this.db
      .object("/shopping-cart/" + carteId)
      .valueChanges()
      .pipe(map((e) => new ShoppingCart(e["items"])));
  }

  private async getOrCreateCarteId(): Promise<String> {
    let cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem("cartId", result.key);
    return result.key;
  }

  async addToCart(product: Product) {
    this.updateCarte(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateCarte(product, -1);
  }

  async updateCarte(product: Product, c: number) {
    let cartId = await this.getOrCreateCarteId();
    let item$ = this.db.object(
      "/shopping-cart/" + cartId + "/items/" + product.key
    );
    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item) => {
        item$.update({
          product: product,
          quantity:
            (item.payload.exists() ? item.payload.val()["quantity"] : 0) + c,
        });
      });
  }

  async clearCart() {
    console.log("remove");
    let cartId = await this.getOrCreateCarteId();
    console.log(cartId);
    this.db.object("/shopping-cart/" + cartId + "/items/").remove();
  }
}
