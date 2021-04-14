import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../interface/iproduct';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: IProduct[] =[];


  constructor(private productService: ProductService) {
    this.getProducts();
  }

  ngOnInit(): void {
  }
  getProducts(){
    this.productService.getProducts().subscribe(products =>{
      this.products = products;
    })
  }


}
