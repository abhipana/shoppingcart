import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudoperationService {
  API_KEY = 'https://api.myjson.com/bins/qzuzi';
  constructor(private httpClient: HttpClient) { }
  public getProducts(){
    return this.httpClient.get(this.API_KEY);
  }
}
