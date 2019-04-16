import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product=[];
  public title:string ="CricketBat";
  public name : string = "good to bat"
  public price :string = "1236.01"
  constructor(private serve:ProductService) {
    // maddy()
   }

  ngOnInit() {
  this.serve.getproducts().then(result => {
    var temp=result['message']
    temp.forEach(result => {
      this.product.push({
        productname:result['product_name'],
        productdesc: result['product_description'],
        productprice: result['product_price']
        
      })
      console.log(result['product_name']);
    });
    result['product_name']
    console.log(result)
  });
  }

}
