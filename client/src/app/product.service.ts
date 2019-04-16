import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public urlApi:string = "http://localhost:3000/api/v1"

  constructor(private http:HttpClient) { }


  public async getproducts():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.get(this.urlApi+'/getAll').subscribe(res=>{
        resolve(res)
        console.log(res);
  
      },
      err=>{
        console.log(err)
      })
    }) as Promise<any>;
    
  }
}
