import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/shared/services/order.service";

@Component({
  selector: "app-admin-orders",
  templateUrl: "./admin-orders.component.html",
  styleUrls: ["./admin-orders.component.css"],
})
export class AdminOrdersComponent implements OnInit {
  orders$;

  constructor(private order: OrderService) {}

  ngOnInit() {
    this.orders$ = this.order.getOrders().valueChanges();
  }
}
