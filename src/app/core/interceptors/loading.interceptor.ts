import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProprietarioService } from 'src/app/modules/proprietarios/services/proprietario.service';
import { delay, finalize } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { StorageService } from 'src/app/shared/util/services/storage.service';
import { AccountService } from 'src/app/shared/util/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private account: AccountService,
    private proprietarioService: ProprietarioService,
    private storage: StorageService,
    private loginService: LoginService

    
    ) {
    console.log("iniciou loading interceptor");

    }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.storage.getLocalUser();
    this.account.isLoggedIn.next(false);
    
    this.account.showLoading(); 
    
    if(request.url === "http://localhost:8080/proprietarios"){
      this.proprietarioService.showTeste();
    }
    this.loginService.showSplash();

    console.log(request);
    
  return next.handle(request)
    .pipe(
      delay(2000),
      finalize(()=> {
      this.proprietarioService.hideTeste();
      this.account.hideLoading();
      this.account.isLoggedIn.next(true);
      })
      );
  }


}
export const LoadingInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoadingInterceptor,
  multi: true,
};