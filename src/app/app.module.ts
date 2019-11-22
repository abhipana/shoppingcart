import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//added for filter 
import { Ng5SliderModule } from 'ng5-slider';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { PopUpModalComponent } from './pop-up-modal/pop-up-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    CartCheckoutComponent,
    ProductListComponent,
    PopUpModalComponent
  ],
  imports: [
    BrowserModule,
    Ng5SliderModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
