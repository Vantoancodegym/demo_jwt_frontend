import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ICategory} from '../interface/category';
const URL_BACKEND = environment.api_url + '/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(URL_BACKEND);
  }
  createCategory(category: ICategory): Observable<ICategory>{
    return this.httpClient.post<ICategory>(URL_BACKEND + '/create', category);
  }
  getById(id: number): Observable<ICategory>{
    return this.httpClient.get<ICategory>(URL_BACKEND + '/' + id);
  }
  editCategory(id: number, category: ICategory): Observable<ICategory>{
    return this.httpClient.put<ICategory>(URL_BACKEND + '/edit/' + id, category);
  }
  deleteCategory(id: number): Observable<any>{
    return this.httpClient.delete(URL_BACKEND+ '/delete/' + id);
  }

}
