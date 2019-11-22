import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
cartedObject:any=[];
  constructor() { }
  setObject(object:any){
    this.cartedObject=object;
  }
  returnObject():any{
    return this.cartedObject;
  }
}
