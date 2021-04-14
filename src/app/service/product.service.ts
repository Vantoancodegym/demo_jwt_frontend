import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from '../interface/iproduct';
const URL_BACKEND = environment.api_url + 'products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(URL_BACKEND);
  }
  findProductById(id: number): Observable<IProduct>{
    return this.httpClient.get<IProduct>(URL_BACKEND + '/' + id);
  }
  createProduct(product: IProduct): Observable<IProduct>{
    return this.httpClient.post<IProduct>(URL_BACKEND + '/create', product);
  }
  editProduct(id: number, product: IProduct): Observable<IProduct>{
    return this.httpClient.put<IProduct>(URL_BACKEND + '/edit/' + id, product);
  }
  deleteProduct(id: number): Observable<any>{
    return this.httpClient.delete(URL_BACKEND + '/delete/' + id);
  }

}
