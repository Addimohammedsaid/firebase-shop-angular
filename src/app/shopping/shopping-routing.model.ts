import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [         
    { 
      path: "shopping-cart", component: ShoppingCartComponent 
    },
    {
      path: "check-out",
      component: CheckOutComponent,
      canActivate: [AuthGuardService],
    },
    {
      path: "order-success/:id",
      component: OrderSuccessComponent,
      canActivate: [AuthGuardService],
    },
    {
      path: "my/orders",
      component: MyOrdersComponent,
      canActivate: [AuthGuardService],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShoppingRoutingModule { }
