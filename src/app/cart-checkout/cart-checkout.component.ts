import { Component, OnInit, Input } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.sass']
})
export class CartCheckoutComponent implements OnInit {
  cartedObject: any=[];
  totalPrice:any=0;
  constructor(private sharedService:SharedServiceService) { }
  CalculateTotalAmount(){
    this.totalPrice=0;
    for(let i=0;i<this.cartedObject.length;i++){
      this.totalPrice=this.totalPrice+(this.cartedObject[i].price * this.cartedObject[i].quantity);
      }
  }
  ngOnInit() {
    this.cartedObject= this.sharedService.returnObject();
    this.AddProperty();
    this.CalculateTotalAmount();
  }
  ngAfterViewInit(){
    this.cartedObject= this.sharedService.returnObject();
    this.AddProperty();
    this.CalculateTotalAmount();
  }
  removeFromCart(id){
    for(let i=0;i<this.cartedObject.length;i++){
      if(this.cartedObject[i].id===id){
        this.cartedObject.splice(i,1);
        this.CalculateTotalAmount();
      }
    }
  }
  BuyNow(){
    alert("Order Placed Successfully.")
  }
  AddProperty(){
    for(let i=0;i<this.cartedObject.length;i++){
      this.cartedObject[i].quantity=1;
    }
  }
  IncrementDecrementQuantity(type,id){
    if(type==='increment'){
      for(let i=0;i<this.cartedObject.length;i++){
        if(this.cartedObject[i].id===id){
            this.cartedObject[i].quantity=this.cartedObject[i].quantity+1;
        }        
        }
    }
    else if(type==='decrement'){
      for(let i=0;i<this.cartedObject.length;i++){
        if(this.cartedObject[i].id===id){
        if(this.cartedObject[i].quantity >1){
          this.cartedObject[i].quantity=this.cartedObject[i].quantity-1;
        }
      
        else{
          alert("Quantity Cannot be Zero")
        }
      }
      }
    }
    this.CalculateTotalAmount();
  }
}
