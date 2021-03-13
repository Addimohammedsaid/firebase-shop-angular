import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { AdminProductsComponent } from "./components/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./components/admin-orders/admin-orders.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { ProductModule } from "../product/product.model";

@NgModule({
  imports: [
    SharedModule,
    ProductModule,
    AdminRoutingModule,        
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,  
  ],
})

export class AdminModule {}
