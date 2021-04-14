import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../interface/category';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  // @ts-ignore
  sub: Subscription;
  category: ICategory ={
    id: 0,
    name: ''
  }
  id: number =0;

  constructor(private categoryservice: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      // @ts-ignore
      this.id = +paramMap.get("id");
      this.getCategory(this.id)
    })
  }

  ngOnInit(): void {
  }
  getCategory(id: number){
    this.categoryservice.getById(id).subscribe(category =>{
      this.category = category;
    })
  }
  editCategory(){
    this.categoryservice.editCategory(this.id, this.category).subscribe(() =>{
      this.router.navigateByUrl("/category")    })
  }

}
