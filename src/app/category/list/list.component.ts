import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ICategory} from '../../interface/category';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  categories: ICategory[] =[];

  constructor(private categoryService: CategoryService) {
    this.getCategories();
  }

  ngOnInit(): void {
  }
  getCategories(){
    this.categoryService.getAll().subscribe(categories =>{
      this.categories =categories;
    })
  }

}
