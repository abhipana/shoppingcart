import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartCheckoutComponent} from '../app/cart-checkout/cart-checkout.component'
import {ProductListComponent} from '../app/product-list/product-list.component'
const routes: Routes = [
  {path: 'checkout-page' , component: CartCheckoutComponent},
  {path:'productlist', component:ProductListComponent},
  { path: '',  redirectTo: '/productlist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
