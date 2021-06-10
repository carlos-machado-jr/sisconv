import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from "@auth0/angular-jwt";

import { API_CONFIG } from 'src/app/core/config/api.config';
import { LocalUser } from 'src/app/core/models/local_user';
import { StorageService } from './storage.service';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import { AccountService } from './account.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  jwt = new JwtHelperService();


  constructor(
    private http: HttpClient,
    private storage: StorageService, 
    private account: AccountService,
    private router: Router
    ) { }

  authenticate(usuario: any){
    return this.http.post(`${API_CONFIG.baseurl}/login`, usuario, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        this.succesfulLogin(response.headers.get('Authorization'))
      })
);
  }



  succesfulLogin(authorizationValue: any){
    if(authorizationValue != null){
      let user = this.extractToken(authorizationValue.substring(7));
      this.storage.setLocalUser(user);

    }
    
    return null;
  }

  logout(){
    // this.storage.setLocalUser();
    // this.storage.setUser();
    localStorage.clear();
    this.account.isLoggedIn.next(false);
    this.router.navigate(['login'])

  }
  

  private extractToken(token: any){
    let nome =  JSON.stringify(this.jwt.decodeToken(token))
    let user: LocalUser = {
      nome_usuario: JSON.parse(nome).sub,
      token: token
    }
    return user;
  }
}
