import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenService} from '../service/authen.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenService: AuthenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authenService.currentUserValue;
    alert(currentUser.accessToken)
    if (currentUser && currentUser.accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      });
    }
    return next.handle(request);
  }
}
