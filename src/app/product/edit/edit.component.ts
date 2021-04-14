import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../../interface/iproduct';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {ICategory} from '../../interface/category';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  // @ts-ignore
  sub: Subscription;
  product: IProduct ={
    id: 0,
    name: '',
    description: '',
    category: {
      id: 0,
      name: ''
    }
  }
  id: number = 0;
  categories: ICategory[] =[];

  constructor(private productService: ProductService, private router: Router,
              private activatedRoute: ActivatedRoute, private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      // @ts-ignore
      this.id = +paramMap.get("id");
      this.getProduct(this.id);
      this.getCategories();
    })
  }

  ngOnInit(): void {
  }
  getProduct(id: number){
    this.productService.findProductById(id).subscribe(product =>{
      this.product = product;
    })
  }
  editProduct(){
    this.productService.editProduct(this.id, this.product).subscribe(() =>{
      this.router.navigateByUrl("/product");
    })
  }
  getCategories(){
    this.categoryService.getAll().subscribe(categories =>{
      this.categories = categories;
    })
  }

}
