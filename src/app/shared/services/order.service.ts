import { ShoppingCartService } from "src/app/shared/services/shopping-cart.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService
  ) {}

  async placeOrder(order) {
    let result = await this.db.list("/orders").push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list("/orders");
  }

  getOrdersByUser(userId: string) {
    return this.db.list("/orders/", (ref) => {
      let q = ref.orderByChild("userId").equalTo(userId);
      return q;
    });
  }
}
