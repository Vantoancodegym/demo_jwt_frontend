import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../interface/category';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  category: ICategory ={
    id: 0,
    name: ''
  }

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }
  creatCategory(){
    this.categoryService.createCategory(this.category).subscribe(() => {
      this.router.navigateByUrl("/category")
    })
  }

}
