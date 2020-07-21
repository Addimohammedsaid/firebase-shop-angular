import { switchMap } from "rxjs/operators";
import { OrderService } from "./../../../shared/services/order.service";
import { AuthService } from "./../../../shared/services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-orders",
  templateUrl: "./my-orders.component.html",
  styleUrls: ["./my-orders.component.css"],
})
export class MyOrdersComponent implements OnInit {
  orders$;

  constructor(private auth: AuthService, private order: OrderService) {}

  ngOnInit() {
    this.auth.user$.pipe(
      switchMap((e) => {
        this.orders$ = this.order.getOrdersByUser(e.uid).valueChanges();
        console.log(this.orders$);
        return this.orders$;
      })
    );
  }
}
