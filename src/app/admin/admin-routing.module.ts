import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductFormComponent } from '../product/components/product-form/product-form.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';



const routes: Routes = [  
  {
        path: "orders",
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService],
  },
  {
      path: "products",
      component: AdminProductsComponent,
      canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: "add/product",
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }