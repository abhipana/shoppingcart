import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//added for filter 
import { Ng5SliderModule } from 'ng5-slider';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CartCheckoutComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    Ng5SliderModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
