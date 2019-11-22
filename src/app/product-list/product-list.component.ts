import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';
import { CrudoperationService } from '../crudoperation.service';
import { SharedServiceService } from '../shared-service.service';
import { ModalService } from '../pop-up-modal/pop-up-modal.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  @Output() objectToEmit = new EventEmitter<any>();
  minValue: number = 100;
  maxValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 1000
  };
  searchText;
  sortValue="high";
  product: any;
  cartedProducts =[];
  objectToDisplay:any =[];
  priceHigh=true;
  priceLow=false;
  priceDiscount=false;
  bodyText: string;
  constructor(private operations: CrudoperationService, private sharedService:SharedServiceService,private modalService: ModalService) { }
 
  ngOnInit() {
    this.operations.getProducts().subscribe((data)=>{      
      this.objectToDisplay = data;
      this.product=data;
      this.sortObject('high');
      this.closeModal('custom-modal-1');
    });
    this.bodyText = 'This text can be updated in modal 1';
  }
  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
  addToCart(productID){
    //alert(productID);
var result;
    for(let i=0;i<this.cartedProducts.length;i++){
      if(this.cartedProducts[i].id===productID)
      result=-1;
    }
    if(result === -1){
      alert("Item already added to cart");
    }
    else{
      alert("Item successfully added to cart");
      for(let i=0;i<this.product.length;i++){
        if(this.product[i].id===productID)
        this.cartedProducts.push(this.product[i])
      }
    }
    this.sharedService.setObject(this.cartedProducts);
  }
  filterFunction(){
    var tempObject=[];
    for(let i=0;i<this.product.length;i++){
      if(this.product[i].price > this.minValue && this.product[i].price <this.maxValue){
        tempObject.push(this.product[i]);
      }
    }
    this.objectToDisplay=tempObject;
    this.closeModal('custom-modal-2');
  }
  sortObject(type){
    var tempObject=this.objectToDisplay;
    if(type === 'low'){
      tempObject.sort(function(a, b) { 
        return a.price- b.price;
        })
        this.priceHigh=false;
        this.priceLow=true;
        this.priceDiscount=false;
        this.objectToDisplay=tempObject;
    }
    else if(type === 'high'){
      tempObject.sort(function(a, b) { 
        return b.price-a.price;
        });
        this.priceHigh=true;
        this.priceLow=false;
        this.priceDiscount=false;
        this.objectToDisplay=tempObject;
    }
    else{
      tempObject.sort(function(a, b) { 
        return b.discount-a.discount;
        })        
        this.priceHigh=false;
        this.priceLow=false;
        this.priceDiscount=true;
        this.objectToDisplay=tempObject;
    }
    this.closeModal('custom-modal-1');
  }
  
}
