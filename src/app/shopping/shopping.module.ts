import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CheckOutComponent } from "./components/check-out/check-out.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { ShoppingCartSummaryComponent } from "./components/shipping-cart-summary/shipping-cart-summary.component";
import { ShoppingRoutingModule } from "./shopping-routing.model";
import { ProductModule } from "../product/product.model";

@NgModule({
  imports: [
    SharedModule,
    ShoppingRoutingModule,  
    ProductModule,  
  ],
  declarations: [   
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,    
    ShoppingCartSummaryComponent,
    ShoppingCartComponent,    
  ],
})
export class ShoppingModule {}
