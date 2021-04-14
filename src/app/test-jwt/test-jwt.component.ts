import { Component, OnInit } from '@angular/core';
import {AuthenService} from '../service/authen.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {IUserToken} from '../interface/user-token';
import {IUser} from '../interface/user';

@Component({
  selector: 'app-test-jwt',
  templateUrl: './test-jwt.component.html',
  styleUrls: ['./test-jwt.component.scss']
})
export class TestJwtComponent implements OnInit {
  // @ts-ignore
  currentUser: IUserToken;
  user: IUser = {
    username: '',
    password: ''
  };
  returnUrl = '';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthenService) {
    this.authService.currentUser.subscribe(value => this.currentUser = value);
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
  }

  login() {
    // @ts-ignore
    this.authService.login(this.user.username, this.user.password)
      .pipe(first())
      .subscribe(data => {
        console.log(this.authService.currentUserValue.accessToken);
        console.log(localStorage.getItem('user'));
        // this.router.navigate([this.returnUrl]);
      });

  }
  testJwt(){
    this.authService.testJWT().subscribe(result =>{
      console.log(result)
    })
  }

}
